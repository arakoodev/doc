---
All: 
  Database:
    name : "Database"
    FeatureIncluded:
      - name: "Dedicated Postgres Database"
        tierFree: true
        tierPro: true
        tierEnterprise: true
      - name: "Unlimited API requests"
        tierFree: true
        tierPro: true
        tierEnterprise: true
      - name: "Database size"
        tierFreeValue: "500 MB"
        tierProValue: "8 GB, then $0.125 per GB"
        tierEnterpriseValue: "Unlimited"
      - name: "Automatic backups"
        tierFree: false
        tierProValue: "7 days"
        tierEnterpriseValue: "Custom"
      - name: "Point in time recovery"
        tierFree: false
        tierProValue: "$100 per 7 days"
        tierEnterprise: true
      - name: "Pausing"
        tierFreeValue: "After 1 inactive week"
        tierProValue: "Never"
        tierEnterpriseValue: "Never"
      - name: "Database egress"
        tierFreeValue: "2GB"
        tierProValue: "50 GB, then $0.09 per GB"
        tierEnterpriseValue: "Unlimited"

Free: 
  - name : "Free"
  - monthlyPrice: "$0"
  - description: "Perfect for hobby projects and experiments"
  - features:
      Database:
        name: "Database"
        FeatureIncluded:
          - name: "Dedicated Postgres Database"
            proOnly: true
          - name: "Unlimited API requests"
            proOnly: true
          - name: "Database size"
            proOnly: true
            value: "8 GB, then $0.125 per GB"
          - name: "Automatic backups"
            proOnly: true
            value: "7 days"
          - name: "Point in time recovery"
            proOnly: true
            value: "$100 per 7 days"
          - name: "Pausing"
            proOnly: true
            value: "Never"
          - name: "Database egress"
            proOnly: true
            value: "50 GB, then $0.09 per GB"
      Auth:
        name: "Auth"
        FeatureIncluded:
          - name: "Total Users"
            proOnly: false
            value: "Unlimited"
          - name: "MAUs"
            proOnly: true
            value: "50,000"
          - name: "Social OAuth providers"
            proOnly: true
          - name: "Custom SMTP server"
            proOnly: true
          - name: "Remove Supabase branding from emails"
            proOnly: false
          - name: "Enterprise OAuth providers"
            proOnly: false
          - name: "Audit trails"
            proOnly: true
            value: "1 hour"
          - name: "Supabase Auth emails"
            proOnly: true
            value: "30 / hour"
          - name: "Single Sign-On (SAML 2.0)"
            proOnly: false
          - name: "Advanced security features"
            proOnly: false
      Storage:
        name: "Storage"
        FeatureIncluded:
          - name: "Storage"
            proOnly: false
            value: "1 GB"
          - name: "Storage egress"
            proOnly: false
            value: "2 GB"
          - name: "Custom access controls"
            proOnly: true
          - name: "Max file upload size"
            proOnly: false
            value: "5MB"
          - name: "Asset transformations"
            proOnly: false
      Realtime:
        name: "Realtime"
        FeatureIncluded:
          - name: "Postgres Changes"
            proOnly: true
          - name: "Concurrent Peak Connections"
            proOnly: false
            value: "200"
          - name: "Messages Per Month"
            proOnly: false
            value: "2 Million"
          - name: "Max Message Size"
            proOnly: false
            value: "250 KB"
      EdgeFunctions:
        name: "Edge Functions"
        FeatureIncluded:
          - name: "Invocations"
            proOnly: false
            value: "500K/month"
          - name: "Script size"
            proOnly: false
            value: "2 MB"
          - name: "Number of functions"
            proOnly: false
            value: "10"
      Dashboard:
        name: "Dashboard"
        FeatureIncluded:
          - name: "Team members"
            proOnly: false
            value: "Unlimited"
          - name: "Access controls"
            proOnly: false
            value: "Coming soon"
          - name: "Audit trails"
            proOnly: false
      Plafform:
        name: "Platform Security and Compliance"
        FeatureIncluded:
          - name: "On Premises / BYO cloud"
            proOnly: false
          - name: "Log retention (API & Database)"
            proOnly: false
            value: "1 days"
          - name: "Log drain"
            proOnly: false
          - name: "Metrics endpoint"
            proOnly: false
          - name: "SOC2"
            proOnly: false
          - name: "SSO"
            proOnly: false
          - name: "99.9% SLA"
            proOnly: false
          - name: "Access Roles"
            proOnly: false
            value: "Owner, Developer"
          - name: "Vanity URLs"
            proOnly: false
          - name: "Custom Domains"
            proOnly: false
      Support:
          name: "Support"
          FeatureIncluded:
            - name: "Community support"
              proOnly: true
            - name: "Email support"
              proOnly: false
            - name: "Email support SLA"
              proOnly: false
            - name: "Designated support"
              proOnly: false
            - name: "On Boarding Support"
              proOnly: false
            - name: "Designated customer success engineer"
              proOnly: false
            - name: "Security Questionnaire Help"
              proOnly: false
Pro:
  - name: "Pro"
  - monthlyPrice: "$25"
  - description: "For production applications with the option to scale."
  - features:
      Database:
        name: "Database"
        FeatureIncluded:
          - name: "Dedicated Postgres Database"
            proOnly: true
          - name: "Unlimited API requests"
            proOnly: true
          - name: "Database size"
            proOnly: true
            value: "8 GB, then $0.125 per GB"
          - name: "Automatic backups"
            proOnly: true
            value: "7 days"
          - name: "Point in time recovery"
            proOnly: true
            value: "$100 per 7 days"
          - name: "Pausing"
            proOnly: true
            value: "Never"
          - name: "Database egress"
            proOnly: true
            value: "50 GB, then $0.09 per GB"
      Auth:
        name: "Auth"
        FeatureIncluded:
          - name: "Total Users"
            proOnly: false
            value: "Unlimited"
          - name: "MAUs"
            proOnly: true
            value: "50,000"
          - name: "Social OAuth providers"
            proOnly: true
          - name: "Custom SMTP server"
            proOnly: true
          - name: "Remove Supabase branding from emails"
            proOnly: false
          - name: "Enterprise OAuth providers"
            proOnly: false
          - name: "Audit trails"
            proOnly: true
            value: "1 hour"
          - name: "Supabase Auth emails"
            proOnly: true
            value: "30 / hour"
          - name: "Single Sign-On (SAML 2.0)"
            proOnly: false
          - name: "Advanced security features"
            proOnly: false
      Storage:
        name: "Storage"
        FeatureIncluded:
          - name: "Storage"
            proOnly: false
            value: "1 GB"
          - name: "Storage egress"
            proOnly: false
            value: "2 GB"
          - name: "Custom access controls"
            proOnly: true
          - name: "Max file upload size"
            proOnly: false
            value: "5MB"
          - name: "Asset transformations"
            proOnly: false
      Realtime:
        name: "Realtime"
        FeatureIncluded:
          - name: "Postgres Changes"
            proOnly: true
          - name: "Concurrent Peak Connections"
            proOnly: false
            value: "200"
          - name: "Messages Per Month"
            proOnly: false
            value: "2 Million"
          - name: "Max Message Size"
            proOnly: false
            value: "250 KB"
      EdgeFunctions:
        name: "Edge Functions"
        FeatureIncluded:
          - name: "Invocations"
            proOnly: false
            value: "500K/month"
          - name: "Script size"
            proOnly: false
            value: "2 MB"
          - name: "Number of functions"
            proOnly: false
            value: "10"
      Dashboard:
        name: "Dashboard"
        FeatureIncluded:
          - name: "Team members"
            proOnly: false
            value: "Unlimited"
          - name: "Access controls"
            proOnly: false
            value: "Coming soon"
          - name: "Audit trails"
            proOnly: false
      Plafform:
        name: "Platform Security and Compliance"
        FeatureIncluded:
          - name: "On Premises / BYO cloud"
            proOnly: false
          - name: "Log retention (API & Database)"
            proOnly: false
            value: "1 days"
          - name: "Log drain"
            proOnly: false
          - name: "Metrics endpoint"
            proOnly: false
          - name: "SOC2"
            proOnly: false
          - name: "SSO"
            proOnly: false
          - name: "99.9% SLA"
            proOnly: false
          - name: "Access Roles"
            proOnly: false
            value: "Owner, Developer"
          - name: "Vanity URLs"
            proOnly: false
          - name: "Custom Domains"
            proOnly: false
      Support:
        name: "Support"
        FeatureIncluded:
          - name: "Community support"
            proOnly: true
          - name: "Email support"
            proOnly: false
          - name: "Email support SLA"
            proOnly: false
          - name: "Designated support"
            proOnly: false
          - name: "On Boarding Support"
            proOnly: false
          - name: "Designated customer success engineer"
            proOnly: false
          - name: "Security Questionnaire Help"
            proOnly: false
Enterprise:
  - name: "Enterprise"
  - monthlyPrice: "Contact us for a quote"
  - description: "For large-scale applications managing serious workloads."
  - features:
      Database:
        name: Database
        FeatureIncluded:
          - name: Dedicated Postgres Database
            proOnly: true
          - name: Unlimited API requests
            proOnly: true
          - name: Database size
            proOnly: true
            value: "8 GB, then $0.125 per GB"
          - name: Automatic backups
            proOnly: true
            value: 7 days
          - name: Point in time recovery
            proOnly: true
            value: "$100 per 7 days"
          - name: Pausing
            proOnly: true
            value: Never
          - name: Database egress
            proOnly: true
            value: "50 GB, then $0.09 per GB"
      Auth:
        name: Auth
        FeatureIncluded:
          - name: Total Users
            proOnly: false
            value: Unlimited
          - name: MAUs
            proOnly: true
            value: 50,000
          - name: Social OAuth providers
            proOnly: true
          - name: Custom SMTP server
            proOnly: true
          - name: Remove Supabase branding from emails
            proOnly: false
          - name: Enterprise OAuth providers
            proOnly: false
          - name: Audit trails
            proOnly: true
            value: 1 hour
          - name: Supabase Auth emails
            proOnly: true
            value: "30 / hour"
          - name: Single Sign-On (SAML 2.0)
            proOnly: false
          - name: Advanced security features
            proOnly: false
      Storage:
        name: Storage
        FeatureIncluded:
          - name: Storage
            proOnly: false
            value: 1 GB
          - name: Storage egress
            proOnly: false
            value: 2 GB
          - name: Custom access controls
            proOnly: true
          - name: Max file upload size
            proOnly: false
            value: 5MB
          - name: Asset transformations
            proOnly: false
      Realtime:
        name: Realtime
        FeatureIncluded:
          - name: Postgres Changes
            proOnly: true
          - name: Concurrent Peak Connections
            proOnly: false
            value: 200
          - name: Messages Per Month
            proOnly: false
            value: "2 Million"
          - name: Max Message Size
            proOnly: false
            value: "250 KB"
      EdgeFunctions:
        name: "Edge Functions"
        FeatureIncluded:
          - name: "Invocations"
            proOnly: false
            value: "500K/month"
          - name: "Script size"
            proOnly: false
            value: "2 MB"
          - name: "Number of functions"
            proOnly: false
            value: "10"
      Dashboard:
        name: "Dashboard"
        FeatureIncluded:
          - name: "Team members"
            proOnly: false
            value: "Unlimited"
          - name: "Access controls"
            proOnly: false
            value: "Coming soon"
          - name: "Audit trails"
            proOnly: false
      Plafform:
        name: "Platform Security and Compliance"
        FeatureIncluded:
          - name: "On Premises / BYO cloud"
            proOnly: false
          - name: "Log retention (API & Database)"
            proOnly: false
            value: "1 days"
          - name: "Log drain"
            proOnly: false
          - name: "Metrics endpoint"
            proOnly: false
          - name: "SOC2"
            proOnly: false
          - name: "SSO"
            proOnly: false
          - name: "99.9% SLA"
            proOnly: false
          - name: "Access Roles"
            proOnly: false
            value: "Owner, Developer"
          - name: "Vanity URLs"
            proOnly: false
          - name: "Custom Domains"
            proOnly: false
      Support:
        name: "Support"
        FeatureIncluded:
          - name: "Community support"
            proOnly: true
          - name: "Email support"
            proOnly: false
          - name: "Email support SLA"
            proOnly: false
          - name: "Designated support"
            proOnly: false
          - name: "On Boarding Support"
            proOnly: false
          - name: "Designated customer success engineer"
            proOnly: false
          - name: "Security Questionnaire Help"
            proOnly: false
---