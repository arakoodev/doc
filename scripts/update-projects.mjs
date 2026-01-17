import fs from 'fs';
import path from 'path';

const GITHUB_USERNAME = 'arakoodev';
const OUTPUT_FILE = path.join(process.cwd(), 'tmp-data/projects.json');
const DATA_DIR = path.dirname(OUTPUT_FILE);

// Selection of "featured" repos based on the user's prompt or general activity.
// Since the user said "pick them up at build time", we'll fetch all and maybe sort/filter.
// We'll filter for non-forks or specific topics if needed, but for now, let's get the active ones.

async function fetchRepos() {
  console.log(`Fetching repositories for ${GITHUB_USERNAME}...`);
  
  try {
    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    // Determine which fetch implementation to use (Node 18+ has global fetch)
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API failed: ${response.status} ${response.statusText}`);
    }

    const repos = await response.json();

    const fetchReadmeSnippet = async (repoName) => {
      try {
        const readmeResponse = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`,
          {
            headers: {
              Accept: "application/vnd.github.raw",
              "User-Agent": "arakoo-www-site",
            },
          }
        );

        if (!readmeResponse.ok) {
          return null;
        }

        const text = await readmeResponse.text();
        const lines = text
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter((line) => line.length > 0);

        if (lines.length === 0) {
          return null;
        }

        return lines.slice(0, 2).join(" ");
      } catch (error) {
        return null;
      }
    };

    // Transform data to what we need
    // Filter out forks if desired, or keep them if they are part of the "research group" work.
    // The prompt says "my ai projects", implying ownership. 
    // We'll stick to sources (not forks) unless they are significant. 
    // Actually, often research groups fork to modify. Let's keep all but prioritize.
    
    // Let's sort by stars, then updated.
    const processedRepos = [];

    for (const repo of repos) {
      if (repo.archived || repo.fork) {
        continue;
      }

      let description = repo.description;

      if (!description) {
        description = await fetchReadmeSnippet(repo.name);
      }

      if (!description) {
        description = "Experimental repository. Classified data.";
      }

      processedRepos.push({
        id: repo.id,
        name: repo.name,
        description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        fork: repo.fork,
      });
    }

    processedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    // Save to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(processedRepos, null, 2));
    console.log(`Successfully saved ${processedRepos.length} repositories to ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('Error fetching repositories:', error);
    process.exit(1);
  }
}

fetchRepos();
