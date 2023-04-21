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
  Auth:
    name : "Auth"
    FeatureIncluded:
      - name: "Total Users"
        tierFreeValue: "Unlimited"
        tierProValue: "Unlimited"
        tierEnterpriseValue: "Unlimited"
      - name: "MAUs"
        tierFreeValue: "50,000"
        tierProValue: "100,000, then $0.00325 per MAU"
        tierEnterpriseValue: "Unlimited"
      - name: "Social OAuth providers"
        tierFree: true
        tierPro: true
        tierEnterprise: true
      - name: "Custom SMTP server"
        tierFree: true
        tierPro: true
        tierEnterprise: true
      - name: "Remove Supabase branding from emails"
        tierFree: false
        tierPro: true
        tierEnterprise: true
      - name: "Enterprise OAuth providers"
        tierFree: false
        tierPro: false
        tierEnterprise: true
      - name: "Audit trails"
        tierFreeValue: "1 hour"
        tierProValue: "7 days"
        tierEnterprise: true
      - name: "Supabase Auth emails"
        tierFreeValue: "30 / hour"
        tierProValue: "100 / hour"
        tierEnterpriseValue: "Contact Us"
      - name: "Single Sign-On (SAML 2.0)"
        tierFree: false
        tierProValue: "50 free, then $0.015 per MAU"
        tierEnterprise: false
        tierEnterpriseValue: "Contact Us"
      - name: "Advanced security features"
        tierFree: false
        tierPro: false
        tierEnterprise: false
        tierEnterpriseValue: "Contact Us"
  Storage:
    name : "Storage"
    FeatureIncluded:
      - name: "Storage"
        tierFreeValue: "1 GB"
        tierProValue: "100 GB, then $0.021 per GB"
        tierEnterpriseValue: "Unlimited"
      - name: "Storage egress"
        tierFreeValue: "2 GB"
        tierProValue: "200 GB, then $0.09 per GB"
        tierEnterpriseValue: "Unlimited"
      - name: "Custom access controls"
        tierFree: true
        tierPro: true
        tierEnterprise: true
      - name: "Max file upload size"
        tierFreeValue: "50MB"
        tierProValue: "5GB"
        tierEnterpriseValue: "Unlimited"
      - name: "Asset transformations"
        tierFree: false
        tierProValue: "100 origin images, then $5 per 1000 origin images"
        tierEnterprise: true
  Realtime:
    name : "Realtime"
    FeatureIncluded:
      - name: Postgres Changes
        tierFree: true
        tierPro: true
        tierEnterprise: true
      - name: Concurrent Peak Connections
        tierFreeValue: "200"
        tierProValue: "500, then $10 per 1000"
        tierEnterpriseValue: "Unlimited concurrent connections and volume discount"
      - name: Messages Per Month
        tierFreeValue: "2 Million"
        tierProValue: "5 Million, then $2.50 per Million"
        tierEnterpriseValue: "Volume discounts on messages"
      - name: Max Message Size
        tierFreeValue: "250 KB"
        tierProValue: "3 MB"
        tierEnterpriseValue: "Custom"
  EdgeFunctions:
    name : "Edge Functions"
    FeatureIncluded:
      - name: Invocations
        tierFreeValue: "500K/month"
        tierProValue: "2 Million, then $2 per 1 Million"
        tierEnterpriseValue: "Unlimited"
      - name: Script size
        tierFreeValue: "2 MB"
        tierProValue: "10 MB"
        tierEnterpriseValue: "Unlimited"
      - name: Number of functions
        tierFreeValue: "10"
        tierProValue: "100, then $10 per additional 100"
        tierEnterpriseValue: "Unlimited"
  Dashboard:
      name : "Edge Functions"
      FeatureIncluded:
      - name: Team members
        tierFreeValue: "Unlimited"
        tierProValue: "Unlimited"
        tierEnterpriseValue: "Unlimited"
      - name: Access controls
        tierFreeValue: "Coming soon"
        tierProValue: "Coming soon"
        tierFree: false
        tierPro: false
        tierEnterprise: true
      - name: Audit trails
        tierFree: false
        tierPro: false
        tierEnterprise: true
  PlatformSecurityandCompliance:
    name: "Platform Security \n and Compliance"
    FeatureIncluded:
      - name: "On Premises / BYO cloud"
        tierFree: false
        tierPro: false
        tierEnterprise: true
      - name: "Log retention (API & Database)"
        tierFreeValue: "1 day"
        tierProValue: "7 days"
        tierEnterpriseValue: "90 days"
      - name: "Log drain"
        tierFree: false
        tierPro: false
        tierEnterprise: false
      - name: "Metrics endpoint"
        tierFree: false
        tierPro: true
        tierEnterprise: true
      - name: "SOC2"
        tierFree: false
        tierPro: false
        tierEnterprise: true
      - name: "SSO"
        tierFree: false
        tierPro: false
        tierEnterprise: false
      - name: "Access Roles"
        tierFreeValue: "Owner, Developer"
        tierProValue: "Owner, Developer"
        tierEnterpriseValue: "Additional owner(s), admin, read-only, billing admin, custom"
      - name: "Vanity URLs"
        tierFree: false
        tierPro: true
        tierEnterprise: true
      - name: "Custom Domains"
        tierFree: false
        tierProValue: "$10 per domain per month per project add on"
        tierEnterpriseValue: "Info 1, additional $10/domain/month"
  Support:
    name: "Support"
    FeatureIncluded:
      - name: Community support
        tierFree: true
        tierPro: true
        tierEnterprise: true
      - name: Email support
        tierFree: false
        tierPro: true
        tierEnterprise: true
      - name: Email support SLA
        tierFree: false
        tierPro: false
        tierEnterprise: true
      - name: Designated support
        tierFree: false
        tierPro: false
        tierEnterprise: true
      - name: On Boarding Support
        tierFree: false
        tierPro: false
        tierEnterprise: true
      - name: Designated customer success engineer
        tierFree: false
        tierPro: false
        tierEnterprise: true
      - name: Security Questionnaire Help
        tierFree: false
        tierPro: false
        tierEnterprise: false

Free: 
  - link: "https://app.supabase.com"
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
  - link: "https://app.supabase.com"
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
  - link: "https://app.supabase.com"
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