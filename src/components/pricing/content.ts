import { translate } from "@docusaurus/Translate"

const FREE_LIST = [
  {
    name: translate({
      id: "new_pricing.team_pricing.team",
      message: "Team",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.only_1_member_for_personal_use",
          message: "Only 1 member for personal use",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.unlimited_editors",
          message: "Unlimited editors",
        }),
        tip: translate({
          id: "new_pricing.team_pricing.an_editor_refers",
          message:
            "An editor refers to a user with editing privileges, including administrators, owners, and editors. They have the ability to modify and create apps, AI agents, flows, and other items. They can also use the published apps and AI agents.",
        }),
        whiteThroughLine: true,
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.build_apps",
      message: "Build apps",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.release_public_apps",
          message: "Release public apps",
        }),
        tip: translate({
          id: "new_pricing.team_pricing.you_can_set_an_app",
          message:
            "You can set an app as public, allowing anyone with the link to access it.",
        }),
        hasLineThrough: true,
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.remove_watermark",
          message: "Remove watermark",
        }),
        hasLineThrough: true,
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.branding",
      message: "Branding",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_domain",
          message: "Custom domain",
        }),
        hasLineThrough: true,
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_branding",
          message: "Custom branding appearence（Coming soon）",
        }),
        hasLineThrough: true,
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_sso",
          message: "Custom SSO（Coming soon）",
        }),
        hasLineThrough: true,
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.security",
      message: "Security & support",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.community_support",
          message: "Community support",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.audit_logs",
          message: "Audit logs",
        }),
        hasLineThrough: true,
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.keep_edit",
          message: "Keep edit history and restore",
        }),
        hasLineThrough: true,
      },
    ],
  },
]

const PREMIUM_LIST = [
  {
    name: translate({
      id: "new_pricing.team_pricing.team",
      message: "Team",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.free_for_unlimited_viewers",
          message: "FREE for unlimited viewers",
        }),
        tip: translate({
          id: "new_pricing.team_pricing.a_viewer_has_read",
          message:
            "A viewer has read-only access and cannot modify the apps, AI agents, flows, or other items you have created. However, they can use the apps and AI agents that you have published.",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.unlimited_editors",
          message: "Unlimited editors",
        }),
        tip: translate({
          id: "new_pricing.team_pricing.an_editor_refers",
          message:
            "An editor refers to a user with editing privileges, including administrators, owners, and editors. They have the ability to modify and create apps, AI agents, flows, and other items. They can also use the published apps and AI agents.",
        }),
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.build_apps",
      message: "Build apps",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.release_public_apps",
          message: "Release public apps",
        }),
        tip: translate({
          id: "new_pricing.team_pricing.you_can_set_an_app",
          message:
            "You can set an app as public, allowing anyone with the link to access it.",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.remove_watermark",
          message: "Remove watermark",
        }),
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.branding",
      message: "Branding",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_domain",
          message: "Custom domain",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_branding",
          message: "Custom branding appearence（Coming soon）",
        }),
        hasLineThrough: true,
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_sso",
          message: "Custom SSO（Coming soon）",
        }),
        hasLineThrough: true,
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.security",
      message: "Security & support",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.community_support",
          message: "Community support",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.audit_logs",
          message: "Audit logs",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.keep_edit",
          message: "Keep edit history and restore",
        }),
      },
    ],
  },
]

const ENTERPRISE_LIST = [
  {
    name: translate({
      id: "new_pricing.team_pricing.team",
      message: "Team",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.free_for_unlimited_viewers",
          message: "FREE for unlimited viewers",
        }),
        tip: translate({
          id: "new_pricing.team_pricing.a_viewer_has_read",
          message:
            "A viewer has read-only access and cannot modify the apps, AI agents, flows, or other items you have created. However, they can use the apps and AI agents that you have published.",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.unlimited_editors",
          message: "Unlimited editors",
        }),
        tip: translate({
          id: "new_pricing.team_pricing.an_editor_refers",
          message:
            "An editor refers to a user with editing privileges, including administrators, owners, and editors. They have the ability to modify and create apps, AI agents, flows, and other items. They can also use the published apps and AI agents.",
        }),
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.build_apps",
      message: "Build apps",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.release_public_apps",
          message: "Release public apps",
        }),
        tip: translate({
          id: "new_pricing.team_pricing.you_can_set_an_app",
          message:
            "You can set an app as public, allowing anyone with the link to access it.",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.remove_watermark",
          message: "Remove watermark",
        }),
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.branding",
      message: "Branding",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_domain",
          message: "Custom domain",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_branding",
          message: "Custom branding appearence（Coming soon）",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.custom_sso",
          message: "Custom SSO（Coming soon）",
        }),
      },
    ],
  },
  {
    name: translate({
      id: "new_pricing.team_pricing.security",
      message: "Security & support",
    }),
    values: [
      {
        text: translate({
          id: "new_pricing.team_pricing.dedicated_support",
          message: "Dedicated support",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.audit_logs",
          message: "Audit logs",
        }),
      },
      {
        text: translate({
          id: "new_pricing.team_pricing.keep_edit",
          message: "Keep edit history and restore",
        }),
      },
    ],
  },
]

export const monthlyContent = [
  {
    title: translate({
      id: "new_pricing.team_pricing.free",
      message: "Free",
    }),
    editor: {
      price: "$0",
      content: translate({
        id: "new_pricing.team_pricing.free_member",
        message: "Only one editor",
      }),
    },
    btnContent: translate({
      id: "new_pricing.team_pricing.build_apps_for_free",
      message: "Build apps for free",
    }),
    href: "https://cloud.illacloud.com",
    list: FREE_LIST,
  },
  {
    title: translate({
      id: "new_pricing.team_pricing.premium",
      message: "Premium",
    }),
    subTitle: translate({
      id: "new_pricing.team_pricing.most_popular",
      message: "Most popular",
    }),
    editor: {
      price: "$20",
      content: translate({
        id: "new_pricing.team_pricing.per_editor",
        message: "per editor",
      }),
    },
    viewer: {
      price: "$0",
      content: translate({
        id: "new_pricing.team_pricing.per_viewer",
        message: "per viewer",
      }),
    },
    hasSpecialColor: true,
    btnContent: translate({
      id: "new_pricing.team_pricing.get_started",
      message: "Get started",
    }),
    href: "https://cloud.illacloud.com/",
    list: PREMIUM_LIST,
  },
  {
    title: translate({
      id: "new_pricing.team_pricing.enterprise",
      message: "Enterprise",
    }),
    editor: {
      price: "$50",
      content: translate({
        id: "new_pricing.team_pricing.per_editor",
        message: "per editor",
      }),
    },
    viewer: {
      price: "$0",
      content: translate({
        id: "new_pricing.team_pricing.per_viewer",
        message: "per viewer",
      }),
    },
    href: "https://cloud.illacloud.com/",
    btnContent: translate({
      id: "new_pricing.team_pricing.coming_soon",
      message: "Coming soon",
    }),
    list: ENTERPRISE_LIST,
  },
]

export const annuallyContent = [
  {
    title: translate({
      id: "new_pricing.team_pricing.free",
      message: "Free",
    }),
    editor: {
      price: "$0",
      content: translate({
        id: "new_pricing.team_pricing.free_member",
        message: "Only one editor",
      }),
    },
    btnContent: translate({
      id: "new_pricing.team_pricing.build_apps_for_free",
      message: "Build apps for free",
    }),
    href: "https://cloud.illacloud.com",
    list: FREE_LIST,
  },
  {
    title: translate({
      id: "new_pricing.team_pricing.premium",
      message: "Premium",
    }),
    subTitle: translate({
      id: "new_pricing.team_pricing.most_popular",
      message: "Most popular",
    }),
    editor: {
      price: "$16.7",
      content: translate({
        id: "new_pricing.team_pricing.per_editor",
        message: "per editor",
      }),
    },
    viewer: {
      price: "$0",
      content: translate({
        id: "new_pricing.team_pricing.per_viewer",
        message: "per viewer",
      }),
    },
    hasSpecialColor: true,
    btnContent: translate({
      id: "new_pricing.team_pricing.get_started",
      message: "Get started",
    }),
    href: "https://cloud.illacloud.com/",
    list: PREMIUM_LIST,
  },
  {
    title: translate({
      id: "new_pricing.team_pricing.enterprise",
      message: "Enterprise",
    }),
    editor: {
      price: "$41.7",
      content: translate({
        id: "new_pricing.team_pricing.per_editor",
        message: "per editor",
      }),
    },
    viewer: {
      price: "$0",
      content: translate({
        id: "new_pricing.team_pricing.per_viewer",
        message: "per viewer",
      }),
    },
    href: "https://cloud.illacloud.com/",
    btnContent: translate({
      id: "new_pricing.team_pricing.coming_soon",
      message: "Coming soon",
    }),
    list: ENTERPRISE_LIST,
  },
]

export const compare = {
  tableHeader: [
    {
      label: translate({
        id: "new_pricing.compare.free",
        message: "Free",
      }),
      mobileLabel: translate({
        id: "new_pricing.compare.oss",
        message: "OSS",
      }),
      btnText: translate({
        id: "new_pricing.compare.try_now",
        message: "Try now",
      }),
      link: "https://cloud.illacloud.com",
    },
    {
      label: translate({
        id: "new_pricing.compare.free",
        message: "Free",
      }),
      btnText: translate({
        id: "new_pricing.compare.try_now",
        message: "Try now",
      }),
      link: "https://cloud.illacloud.com",
    },
    {
      label: translate({
        id: "new_pricing.compare.premium",
        message: "Premium",
      }),
      btnText: translate({
        id: "new_pricing.compare.try_now",
        message: "Try now",
      }),
      link: "https://cloud.illacloud.com",
    },
    {
      label: translate({
        id: "new_pricing.compare.enterprise",
        message: "Enterprise",
      }),
      btnText: translate({
        id: "new_pricing.compare.coming_soon",
        message: "Coming soon",
      }),
      link: "https://cloud.illacloud.com",
    },
  ],
  items: [
    {
      isTitle: true,
      title: translate({
        id: "new_pricing.compare.team",
        message: "Team",
      }),
      texts: ["", "", "", ""],
    },
    {
      title: translate({
        id: "new_pricing.compare.free_for_unlimited_viewers",
        message: "FREE for unlimited viewers",
      }),
      texts: [
        translate({
          id: "new_pricing.compare.only_1_member_for_personal_use",
          message: "Only 1 member for personal use",
        }),
        translate({
          id: "new_pricing.compare.only_1_member_for_personal_use",
          message: "Only 1 member for personal use",
        }),
        true,
        true,
      ],
    },
    {
      title: translate({
        id: "new_pricing.compare.unlimited_editors",
        message: "Unlimited editors",
      }),
      texts: [false, false, true, true],
    },

    // --
    {
      isTitle: true,
      title: translate({
        id: "new_pricing.compare.colla",
        message: "Colla",
      }),
      texts: ["", "", "", ""],
    },
    {
      title: translate({
        id: "new_pricing.compare.free_colla",
        message: "Free Colla",
      }),
      texts: [
        translate({
          id: "new_pricing.compare.opensource_free_colla",
          message: "0",
        }),
        translate({
          id: "new_pricing.compare.cloud_free_colla",
          message: "1,000",
        }),
        translate({
          id: "new_pricing.compare.premium_free_colla",
          message: "2,500/seats/month",
        }),
        translate({
          id: "new_pricing.compare.enterprise_free_colla",
          message: "10,000/seats/month",
        }),
      ],
      isColla: true,
    },

    // --
    {
      isTitle: true,
      title: translate({
        id: "new_pricing.compare.build_apps",
        message: "Build apps",
      }),
      texts: ["", "", "", ""],
    },
    {
      title: translate({
        id: "new_pricing.compare.all_components",
        message: "All components",
      }),
      texts: [true, true, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.all_resources",
        message: "All resources",
      }),
      texts: [true, true, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.unlimited_apps",
        message: "Unlimited apps",
      }),
      texts: [true, true, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.ai_sql_generation",
        message: "AI SQL Generation",
      }),
      texts: [false, true, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.integrate_with_ai_agent",
        message: "Integrate with AI Agent",
      }),
      texts: [false, true, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.integrate_with_illa_flow",
        message: "Integrate with ILLA Flow",
      }),
      texts: [false, true, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.integrate_with_illa_drive",
        message: "Integrate with ILLA Drive",
      }),
      texts: [false, true, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.release_public_apps",
        message: "Release public apps",
      }),
      texts: [false, false, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.remove_watermark",
        message: "Remove watermark",
      }),
      texts: [false, false, true, true],
    },

    // ---
    {
      isTitle: true,
      title: translate({
        id: "new_pricing.compare.illa_flow",
        message: "ILLA Flow",
      }),
      texts: ["", "", "", ""],
    },
    {
      title: translate({
        id: "new_pricing.compare.unlimited_flows",
        message: "Unlimited Flows",
      }),
      texts: [false, true, true, true],
    },

    // --

    {
      isTitle: true,
      title: translate({
        id: "new_pricing.compare.ai_agent",
        message: "AI Agent",
      }),
      texts: ["", "", "", ""],
    },
    {
      title: translate({
        id: "new_pricing.compare.unlimited_ai_agents",
        message: "Unlimited AI Agents",
      }),
      texts: [false, true, true, true],
    },

    // --
    {
      isTitle: true,
      title: translate({
        id: "new_pricing.compare.illa_drive",
        message: "ILLA Drive",
      }),
      texts: ["", "", "", ""],
    },
    {
      title: translate({
        id: "new_pricing.compare.store_and_distribute_files",
        message: "Store and distribute files",
      }),
      texts: [false, true, true, true],
    },

    // --
    {
      isTitle: true,
      title: translate({
        id: "new_pricing.compare.branding",
        message: "Branding",
      }),
      texts: ["", "", "", ""],
    },
    {
      title: translate({
        id: "new_pricing.compare.custom_domain",
        message: "Custom domain",
      }),
      texts: [false, false, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.custom_branding_appearence",
        message: "Custom branding appearence（Coming soon）",
      }),
      texts: [false, false, false, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.custom_sso",
        message: "Custom SSO（Coming soon）",
      }),
      texts: [false, false, false, true],
    },

    // --
    {
      isTitle: true,
      title: translate({
        id: "new_pricing.compare.security",
        message: "Security & support",
      }),
      texts: ["", "", "", ""],
    },
    {
      title: translate({
        id: "new_pricing.compare.audit_logs",
        message: "Audit logs",
      }),
      texts: [false, false, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.keep_edit_history_and_restore",
        message: "Keep edit history and restore",
      }),
      texts: [false, false, true, true],
    },
    {
      title: translate({
        id: "new_pricing.compare.dedicated_support",
        message: "Dedicated support",
      }),
      texts: [false, false, false, true],
    },
  ],
}
