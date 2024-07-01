export const wikiData = [
    
    {
      id: 1,
      title: "ParentAdmin",
      content: "There can only be one ParentAdmin. This role has access to the following pages:\n\n" +
        "- stepForm: Accessible only during the first-time login when firstLogin is true.\n" +
        "- dashboard: Default landing page after regular login.\n" +
        "- CompanyDetails: Manage company details.\n" +
        "- addUser: Add new users.\n" +
        "- billing: Manage billing details."
    },
    {
      id: 2,
      title: "Admin",
      content: "Multiple users can be assigned the Admin role. This role has access to the following pages:\n\n" +
        "- dashboard: Default landing page after regular login (view only).\n" +
        "- addUser: Add new users.\n" +
        "- Metadata mapping: Manage metadata mapping.\n" +
        "- Organisation Setting: Manage organisational settings.\n" +
        "- Vendor Mapping: Manage vendor mapping.\n" +
        "- AdhocReporting: Generate ad-hoc reports.\n" +
        "- Certificate Generation: Generate certificates (requires signatory)."
    },
    {
      id: 3,
      title: "Processor",
      content: "Multiple users can be assigned the Processor role. A Processor cannot be an Approver or a Signatory. This role has access to:\n\n" +
        "- Dashboard: Default landing page (view, ad-hoc reports, certificate generation).\n" +
        "- Metadata Mapping: Manage metadata mapping.\n" +
        "- Organisation setting: Manage organisational settings.\n" +
        "- Vendor Mapping: Manage vendor mapping.\n" +
        "- Upload Data: Upload data.\n" +
        "- Reconciliation: Manage reconciliation.\n\n" +
        "Note: When adding a user, if Processor is selected, Approver should be removed from the dropdown list and vice versa."
    },
    {
      id: 4,
      title: "Approver",
      content: "Multiple users can be assigned the Approver role. This role has access to:\n\n" +
        "- dashboard: Default landing page (view and export trail).\n" +
        "- reconciliation: Manage reconciliation."
    },
    {
      id: 5,
      title: "Auditor",
      content: "When the Auditor role is selected, all other role fields should be removed. This role has access to:\n\n" +
        "- dashboard: Default landing page (view, query, and export data)."
    },
    {
      id: 6,
      title: "Signatory",
      content: "The Signatory role is mentioned in relation to the Admin role for certificate generation, but no specific access rights are detailed."
    }
  ];