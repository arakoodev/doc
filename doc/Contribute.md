---
sidebar_position: 10
---

# Contributing to EdgeChains

We welcome contributions to EdgeChains! Whether you want to report an issue, make code contributions, submit pull requests, provide feature requests and suggestions, or engage with the community, we appreciate your involvement.

Please take a moment to review the guidelines below before contributing.

## Reporting Issues

If you encounter any issues or bugs while using EdgeChains, please report them by creating a new [issue](https://github.com/arakoodev/edgechains/issues/new) on the EdgeChains GitHub repository. Provide the following information:

   - **Title**: Give a clear and concise title that summarizes the issue.
   - **Description**: In the description, provide a detailed explanation of the issue you encountered. Use Markdown formatting to structure your description, such as headings, lists, and code blocks.
   - **Steps to reproduce**: If applicable, include the steps required to reproduce the issue.
   - **Expected behavior**: Describe what you expected to happen when encountering the issue.
   - **Actual behavior**: Explain what actually happened that you consider to be incorrect or problematic.
   - **Screenshots**: If relevant, include screenshots or images to provide visual context.
   - **Additional information**: Add any relevant information such as error messages, logs, or specific system configurations.

You can further discuss and collaborate on the issue by adding comments, providing additional information, or responding to others' comments. Remember to be respectful and provide as much relevant information as possible to help the maintainers and other contributors understand and address the issue effectively.

## Making Code Contributions

We welcome code contributions to EdgeChains. You can check open Check open [Github Issues](https://github.com/arakoodev/edgechains/issues) as well. To get started, you can fork the [EdgeChains repository](https://github.com/arakoodev/EdgeChains) and create a new branch for your changes. Ensure that your code follows the project's coding conventions and guidelines. It's important to write clear, concise, and well-documented code. Additionally, include unit tests whenever possible to maintain code quality. 

Make sure to read our [contributing CLA](https://github.com/arakoodev/.github/blob/main/CLA.md).

To ensure clean and effective pull request merges, we follow a specific approach known as "**squash and merge**." It is crucial to avoid issuing multiple pull requests from the same local branch, as this will result in failed merges.

To resolve this issue, we strictly adhere to the practice of "**ONE BRANCH PER PULL REQUEST**." If you have inadvertently created a pull request from your master/main branch, you can easily rectify it by following these steps:

> Note: Please ensure that you have committed all your changes before proceeding, as any uncommitted changes will be lost.

 if you have created this pull request using your master/main branch, then follow these steps to fix it:
```
git branch newbranch      # Create a new branch, saving the desired commits
git checkout master       # checkout master, this is the place you want to go back
git reset --hard HEAD~3   # Move master back by required number of commits 
git checkout newbranch    # Go to the new branch that still has the desired commits. 
```
Now, you can create a pull request. 

## Submitting Pull Requests

When you are ready to contribute your changes, submit a pull request for review. Provide a comprehensive description of the changes you have made, including the motivation behind them. The pull request should adhere to the project's coding standards and include all relevant documentation updates. It's recommended to divide larger changes into logical and manageable commits.

Provide the following information:

   - **Title**: Provide a concise and descriptive title for your pull request. It should summarize the purpose or nature of the changes.
   - **Description**: Write a detailed description of the changes you have made. Explain the motivation behind the changes and the problem they address. Include any relevant background information that helps reviewers understand the context of your contribution.
   - **Scope of Changes**: Specify the scope of your changes. Mention the files, modules, or components that are affected by your modifications.
   - **Testing**:Describe the testing you have performed to ensure the correctness and quality of your changes. Include information about the test cases, frameworks, or tools used in the testing process.
   - **Documentation Updates**: If your changes require updates to the project's documentation, mention the specific documentation files or sections that have been modified or added.
   - **Screenshots**: If your changes include user interface modifications or visual enhancements, provide screenshots or visuals that demonstrate the visual impact of your changes.
   - **Related Issues**: If your pull request is related to an existing issue in the issue tracker, reference the issue number in your pull request description. This helps establish the connection between the issue and the corresponding changes.
   - **Additional Notes**: If there are any additional notes, considerations, or limitations that reviewers should be aware of, include them in your pull request description.

## Feature Requests and Suggestions

If you have ideas for new features or improvements to EdgeChains, we encourage you to share them with us. You can submit your suggestions by creating a new discussion on the [GitHub repository](https://github.com/arakoodev/edgechains/discussions/new). Clearly describe the proposed feature or improvement, providing context and rationale for its inclusion. Feedback and discussion from the community are valuable in shaping the future development of EdgeChains.

## Engaging with the Community

Active engagement with the EdgeChains community is encouraged. You can join our [Discord server](https://discord.gg/MtEPK9cnSF), which serves as a platform for developers to connect, collaborate, and discuss EdgeChains-related topics. Ask questions, share your experiences, and provide assistance to fellow community members. 

Additionally, actively participate in discussions on the [GitHub repository](https://github.com/arakoodev/edgechains/discussions) by reviewing and commenting on pull requests, sharing insights, and providing constructive feedback.

We appreciate your contributions and engagement in making EdgeChains better. Thank you for your support! Your contributions help improve the project and benefit the entire community.

For the most up-to-date guidelines and instructions, please refer to the [EdgeChains repository](https://github.com/arakoodev/edgechains).
