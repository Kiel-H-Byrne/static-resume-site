var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/blog.tsx
var require_blog = __commonJS({
  "app/routes/blog.tsx"() {
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(
  null
);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache")), defaultCache = createEmotionCache();
function createEmotionCache() {
  return (0, import_cache.default)({ key: "cha" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@emotion/react"), import_react6 = require("@chakra-ui/react");

// metadata.json
var title = "Kiel H. Byrne - Resume", charset = "utf-8", viewport = "width=device-width,initial-scale=1";

// app/root.tsx
var import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac"
  }
}, theme = (0, import_react6.extendTheme)({ colors }), meta = () => ({
  charset,
  title,
  viewport
}), links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], Document = (0, import_react5.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react4.useContext)(ServerStyleContext), clientStyleData = (0, import_react4.useContext)(ClientStyleContext);
    return (0, import_react4.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 73,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.ChakraProvider, { theme, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 94,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react11 = require("@chakra-ui/react"), import_react_typed = __toESM(require("react-typed"));

// ColorModeSwitch.tsx
var import_react8 = require("@chakra-ui/react"), import_icons = require("@chakra-ui/icons"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), ColorModeSwitch = () => {
  let { colorMode, toggleColorMode } = (0, import_react8.useColorMode)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react8.IconButton,
    {
      "aria-label": "Toggle color mode",
      onClick: toggleColorMode,
      icon: colorMode === "light" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.MoonIcon, {}, void 0, !1, {
        fileName: "ColorModeSwitch.tsx",
        lineNumber: 12,
        columnNumber: 37
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.SunIcon, {}, void 0, !1, {
        fileName: "ColorModeSwitch.tsx",
        lineNumber: 12,
        columnNumber: 52
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "ColorModeSwitch.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}, ColorModeSwitch_default = ColorModeSwitch;

// ReactGist.tsx
var import_react9 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function ReactEmbedGist(props) {
  let [loading, setLoading] = (0, import_react9.useState)(!0), [title2, setTitle] = (0, import_react9.useState)(""), [content, setContent] = (0, import_react9.useState)(""), [error, setError] = (0, import_react9.useState)("");
  (0, import_react9.useEffect)(() => {
    getGist();
  }, [props.gist]);
  let getGist = async () => {
    let { gist, file } = props, id = gist.split("/")[1];
    if (!id) {
      setLoading(!1), setError(`${gist} is not valid format`);
      return;
    }
    setLoading(!0), setupCallback(id);
    let script = document.createElement("script"), url = `https://gist.github.com/${gist}.json?callback=gist_callback_${id}`;
    file && (url += `&file=${file}`), script.type = "text/javascript", script.src = url, script.onerror = (e) => handleNetworkErrors(e), document.head.appendChild(script);
  }, handleNetworkErrors = (e) => {
    setError(`${props.gist} failed to load`), setLoading(!1);
  }, setupCallback = (id) => {
    window[`gist_callback_${id}`] = function(gist) {
      let nextState = { loading: !1, error: gist.error || null };
      if (nextState.error || (setTitle(gist.description), setContent(`${gist.div.replace(/href=/g, 'target="_blank" href=')}`)), setLoading(nextState.loading), document.head.innerHTML.indexOf(gist.stylesheet) === -1) {
        let stylesheet = document.createElement("link");
        stylesheet.type = "text/css", stylesheet.rel = "stylesheet", stylesheet.href = gist.stylesheet, document.head.appendChild(stylesheet);
      }
    };
  }, {
    loadingClass,
    wrapperClass,
    titleClass,
    contentClass,
    errorClass,
    loadingFallback
  } = props;
  if (loading)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("article", { className: loadingClass, children: loadingFallback || "Loading ..." }, void 0, !1, {
      fileName: "ReactGist.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this);
  if (error) {
    console.log(error);
    return;
  } else
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("article", { className: wrapperClass, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: titleClass, children: title2 }, void 0, !1, {
        fileName: "ReactGist.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "section",
        {
          className: contentClass,
          dangerouslySetInnerHTML: { __html: content }
        },
        void 0,
        !1,
        {
          fileName: "ReactGist.tsx",
          lineNumber: 94,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "ReactGist.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this);
}

// SideBar.tsx
var import_react10 = require("@chakra-ui/react"), import_icons2 = require("@chakra-ui/icons"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), LinkItems = [
  { name: "Home", icon: import_icons2.ArrowBackIcon },
  { name: "Trending", icon: import_icons2.ArrowUpIcon },
  { name: "Explore", icon: import_icons2.SunIcon },
  { name: "Favourites", icon: import_icons2.StarIcon },
  { name: "Settings", icon: import_icons2.SettingsIcon }
];
function Sidebar({ children }) {
  let { isOpen, onOpen, onClose } = (0, import_react10.useDisclosure)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      SidebarContent,
      {
        onClose: () => onClose,
        display: { base: "none", md: "block" }
      },
      void 0,
      !1,
      {
        fileName: "SideBar.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_react10.Drawer,
      {
        autoFocus: !1,
        isOpen,
        placement: "left",
        onClose,
        returnFocusOnClose: !1,
        onOverlayClick: onClose,
        size: "sm",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.DrawerContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SidebarContent, { onClose }, void 0, !1, {
          fileName: "SideBar.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "SideBar.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "SideBar.tsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MobileNav, { display: { base: "flex", md: "none" }, onOpen }, void 0, !1, {
      fileName: "SideBar.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Box, { ml: { base: 0, md: 60 }, p: "4", children }, void 0, !1, {
      fileName: "SideBar.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "SideBar.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
var SidebarContent = ({ onClose, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_react10.Box,
  {
    bg: "transparent",
    borderRight: "1px",
    borderRightColor: (0, import_react10.useColorModeValue)("gray.200", "brand.primary"),
    w: { base: "full", md: 60 },
    pos: "fixed",
    h: "50%",
    className: "nav-menu",
    ...rest,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Flex, { h: "20", alignItems: "center", mx: "8", justifyContent: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Text, { fontSize: "2xl", fontFamily: "monospace", fontWeight: "bold", children: "Logo" }, void 0, !1, {
          fileName: "SideBar.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.CloseButton, { display: { base: "flex", md: "none" }, onClick: onClose }, void 0, !1, {
          fileName: "SideBar.tsx",
          lineNumber: 93,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "SideBar.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Box, { children: LinkItems.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavItem, { icon: link.icon, children: link.name }, link.name, !1, {
        fileName: "SideBar.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)) }, void 0, !1, {
        fileName: "SideBar.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "SideBar.tsx",
    lineNumber: 79,
    columnNumber: 5
  },
  this
), NavItem = ({ icon, children, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_react10.Link,
  {
    href: "#",
    style: { textDecoration: "none" },
    _focus: { boxShadow: "none" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_react10.Flex,
      {
        align: "center",
        p: "4",
        mx: "4",
        borderRadius: "lg",
        role: "group",
        cursor: "pointer",
        _hover: {
          bg: "cyan.400",
          color: "white"
        },
        ...rest,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_react10.Icon,
            {
              mr: "4",
              fontSize: "16",
              _groupHover: {
                color: "white"
              },
              as: icon
            },
            void 0,
            !1,
            {
              fileName: "SideBar.tsx",
              lineNumber: 131,
              columnNumber: 11
            },
            this
          ),
          children
        ]
      },
      void 0,
      !0,
      {
        fileName: "SideBar.tsx",
        lineNumber: 117,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "SideBar.tsx",
    lineNumber: 112,
    columnNumber: 5
  },
  this
), MobileNav = ({ onOpen, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_react10.Flex,
  {
    ml: { base: 0, md: 60 },
    px: { base: 4, md: 24 },
    height: "20",
    alignItems: "center",
    bg: (0, import_react10.useColorModeValue)("white", "gray.900"),
    borderBottomWidth: "1px",
    borderBottomColor: (0, import_react10.useColorModeValue)("gray.200", "gray.700"),
    justifyContent: "flex-start",
    ...rest,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react10.IconButton,
        {
          variant: "outline",
          onClick: onOpen,
          "aria-label": "open menu",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_icons2.MoonIcon, {}, void 0, !1, {
            fileName: "SideBar.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this),
          className: "mobile-nav-toggle"
        },
        void 0,
        !1,
        {
          fileName: "SideBar.tsx",
          lineNumber: 162,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Text, { fontSize: "2xl", ml: "8", fontFamily: "monospace", fontWeight: "bold", children: "Logo" }, void 0, !1, {
        fileName: "SideBar.tsx",
        lineNumber: 170,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "SideBar.tsx",
    lineNumber: 151,
    columnNumber: 5
  },
  this
);

// app/experience.json
var experience_default = {
  basics: {
    name: "Kiel H. Byrne",
    label: "I build\u2026 with my hands, with code, with my networks, with my community.",
    image: "",
    email: "kiel.byrne@gmail.com",
    phone: "",
    url: "https://kielbyrne.com",
    summary: `\u{1F914} An entrepreneurial problem solver and life-long-learner, I obsess over optimizing systems with engineered products or services \u{1F6E0}\uFE0F

\u{1F4DA} A project-driven extroverted introvert;  laser focused on delivering a project and communicate effectively to stakeholders and non-technical audiences. \u{1F5E3}\uFE0F`,
    location: {
      countryCode: "US",
      address: "United States"
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "kielbyrne",
        url: "https://www.linkedin.com/in/kielbyrne/"
      },
      {
        network: "Twitter",
        username: "TdotHolla",
        url: "https://twitter.com/TdotHolla"
      }
    ]
  },
  work: [
    {
      name: "Gopuff",
      position: "Software Engineer -  Digital Merchandising / I18N",
      startDate: "2022-01-31",
      endDate: "2023-03-31",
      highlights: [],
      summary: `\u2B29 Contribute to internationalization libraries to enforce industry standards
\u2B29 Automate and administer localization processes, facilitating engineer and translator efficiencies
\u2B29 Document i18n best practices & engineering systems while training engineers
\u2B29 Develop features aligned with driving more consumer interaction to targeted merchandise`,
      url: "https://www.linkedin.com/company/gopuff/",
      location: "United States"
    },
    {
      name: "CoStar Group",
      position: "Software Engineer - Internationalization",
      startDate: "2021-03-31",
      endDate: "2022-01-31",
      highlights: [],
      summary: `\u2B29 Created custom documentation and presentations to educate various business units and audiences on i18n concepts and best practices.
\u2B29 Collaborated and consulted with other engineering teams and business units to integrate internationalization (i18n) systems and implement localization (l10n) workflows.
\u2B29 Created various scripts, monitoring and visualization tools to monitor l10n progress across multiple projects/teams.
\u2B29 Provided technical expertise and engineered solutions to in-house Translation Manager to optimize l10n and translation (t9n) processes.`,
      url: "https://www.linkedin.com/company/costar-group/",
      location: "Washington, District of Columbia, United States"
    },
    {
      name: "CoStar Group",
      position: "Associate Software Engineer - Internationalization",
      startDate: "2019-11-30",
      endDate: "2021-03-31",
      highlights: [],
      summary: `\u2B29 Created tools and scripts to aid in the identification of issues that would hinder or prevent i18n.
\u2B29 Created monitoring and visualization resources to track i18n progress through milestones
\u2B29 Prepared educational content to assist in helping teams prepare for and understand the nuances of i18n.`,
      url: "https://www.linkedin.com/company/costar-group/",
      location: "Washington D.C. Metro Area"
    },
    {
      name: "Perkins and Will",
      position: "IT Services Manager",
      startDate: "2015-04-30",
      endDate: "2019-11-30",
      highlights: [],
      url: "https://www.linkedin.com/company/perkins-will/",
      location: "Washington D.C. Metro Area"
    },
    {
      name: "PAKKE",
      position: "Technical Co-Founder",
      startDate: "2017-04-30",
      endDate: "2019-03-31",
      highlights: [],
      summary: `\u0394   Defined the technical architecture, system design, and roadmap of the PAKKE product.
\u0394   Built platform which grew to 650+ profiles created, 800+ subscribers, 210 ticketing transactions within first 9 months.`,
      url: "https://www.linkedin.com/company/pakke/",
      location: "Washington D.C. Metro Area"
    },
    {
      name: "HOK",
      position: "IT Support Specialist",
      startDate: "2013-08-31",
      endDate: "2015-04-30",
      highlights: [],
      summary: `+ Tier 1-3 support of hardware, software systems, and peripherals; including networking LAN and WLAN management. 
+ Support global user-base on weekly basis via helpdesk ticketing system. 
+ Provisioning and configuration of employee accounts and equipment throughout their life cycles. 
+ Created technical documentation of processes and systems, as well as provided training sessions for staff. 
+ Directly support of at most four offices at a time, equating to 200+ users in four cities. 
+ Personal responsibility for fostering a \u2018green workplace\u2019 through sustainable work practices and technology policy.`,
      url: "https://www.linkedin.com/company/hok/"
    },
    {
      name: "HOK",
      position: "IT Support Specialist",
      startDate: "2012-11-30",
      endDate: "2013-08-31",
      highlights: [],
      url: "https://www.linkedin.com/company/hok/"
    },
    {
      name: "HOK",
      position: "IT Support Specialist",
      startDate: "2012-03-31",
      endDate: "2012-11-30",
      highlights: [],
      url: "https://www.linkedin.com/company/hok/"
    },
    {
      name: "Rent The Runway",
      position: "IT Developer",
      startDate: "2011-06-30",
      endDate: "2012-03-31",
      highlights: [],
      summary: `\u2022 Administer all network, Internet, VOIP, cellular, security, A/V, deskside systems, and end-user software throughout their lifecycles; from procurement and configuration through maintenance, updates, and monitoring.
\u2022 Creation of I.T. related budgets, network usage, bandwidth and other reports.
\u2022 Creation and maintenance of technical documentation libraries including inventories and manuals.
\u2022 Created and led training programs in order to boost business productivity via user education.
\u2022 Administered the creation of an 'Intranet' which comprises corporate calendars, current events, frequented documents, social media feeds, and other resources.`,
      url: "https://www.linkedin.com/company/rent-the-runway/",
      location: "Manhattan, NY"
    },
    {
      name: "Kallen & Lemelson, Consulting Engineers, LLP",
      position: "Plumbing & Fire Protection Design Engineer",
      startDate: "2009-12-31",
      endDate: "2010-12-31",
      highlights: [],
      summary: "\u2022 Provided plumbing, fire protection, and life safety consulting support to various international clientele. Projects include but are not limited to; healthcare facilities, schools, industrial structures.",
      url: "https://www.linkedin.com/company/kallen-&-lemelson-consulting-engineers-llp/"
    },
    {
      name: "Fiskaa, LLC",
      position: "Plumbing & Fire Protection Design Engineer",
      startDate: "2007-12-31",
      endDate: "2009-12-31",
      highlights: [],
      summary: `\u2022	Provided plumbing, fire protection, and life safety consulting support to various international clientele. Projects include but are not limited to; hotels, amusement park, residential, commercial and government office buildings, retail, healthcare facilities, schools. 
\u2022	Created cost schedules for the plumbing and life safety systems involved on projects.
\u2022	Managed small team of CAD operators to efficiently satisfy tight deadlines.
\u2022	Awarded funds to obtain Plumbing Systems certificate at NYU.`,
      url: "https://www.linkedin.com/company/fiskaa-llc/",
      location: "Greater New York City Area"
    },
    {
      name: "United States Department of Defense",
      position: "Technical Engineer Intern",
      startDate: "2006-12-31",
      endDate: "2006-12-31",
      highlights: [],
      summary: `\u2022 Document the Source Selection Process for DoD Close Combat Solutions.
\u2022 Assisted in the testing and documentation of various CC warfare solutions.`,
      url: "https://www.linkedin.com/company/deptofdefense/",
      location: "Picatinny Arsenal"
    },
    {
      name: "IBM",
      position: "Facilities Engineer Intern",
      startDate: "2005-12-31",
      endDate: "2005-12-31",
      highlights: [],
      summary: `\u2022 Map existing piping infrastructure for TJ Watson Research Facility
\u2022 Give recommendations for the redesign of Distributed Fluid Systems.`,
      url: "https://www.linkedin.com/company/ibm/",
      location: "Yorktown Heights, NY"
    }
  ],
  volunteer: [
    {
      organization: "Westchester Medical Center, a member of WMCHealth",
      position: "Ambulatory Surgery Auxiliary Services",
      startDate: "1998-05-31",
      endDate: "2001-08-31",
      summary: "Volunteered in the Ambulatory department, transporting patients around the hospital either admitting/discharging via wheelchair; or room transfers via wheeled bed.",
      highlights: [],
      url: "https://www.linkedin.com/company/21721"
    }
  ],
  education: [
    {
      institution: "Excelsior College",
      area: "Information Technology Management",
      studyType: "",
      startDate: "2012-01-31",
      endDate: "2012-12-31",
      score: "",
      courses: []
    },
    {
      institution: "University of Maryland Baltimore County",
      area: "Mechanical Engineering",
      studyType: "",
      startDate: "2001-12-31",
      endDate: "2006-12-31",
      score: "",
      courses: []
    },
    {
      institution: "Fordham Preparatory School",
      area: "Regents & AP Program",
      studyType: "High School Diploma",
      startDate: "1999-12-31",
      endDate: "2001-12-31",
      score: "",
      courses: []
    },
    {
      institution: "NYU School of Professional Studies",
      area: "Plumbing Systems Design",
      studyType: "",
      startDate: "2009-02-28",
      endDate: "2009-05-31",
      score: "",
      courses: []
    }
  ],
  awards: [],
  certificates: [
    {
      name: "Preventing Workplace Harassment",
      issuer: "emtrain",
      startDate: "2018-02-28"
    },
    {
      name: "Remote Work Foundations",
      issuer: "LinkedIn",
      startDate: "2021-03-31",
      url: "https://www.linkedin.com/learning/certificates/1f828443431fe2929919e9860c787d637983d7523d46c77b8012f52c12efeedc?trk=backfilled_certificate"
    },
    {
      name: "React: Testing and Debugging",
      issuer: "LinkedIn",
      startDate: "2021-04-30",
      url: "https://www.linkedin.com/learning/certificates/f4a016bbab8f5c0ac2b048847c6858fa64541c87fd44f6a5de44b0ba2a9e2500?trk=backfilled_certificate"
    },
    {
      name: "Learning PowerShell",
      issuer: "LinkedIn",
      startDate: "2021-04-30",
      url: "https://www.linkedin.com/learning/certificates/d638910ff0e952d08371b84ec92bce3f84329d9e10e96dfb6282d248dfba70a5?trk=backfilled_certificate"
    },
    {
      name: "JavaScript: Patterns",
      issuer: "LinkedIn",
      startDate: "2021-04-30",
      url: "https://www.linkedin.com/learning/certificates/203710a8ef5e0a12384682fcfbadc83ca539b24d7857fc10f8985e042c2f79ff?trk=backfilled_certificate"
    },
    {
      name: "Sketch: Working with Developers",
      issuer: "LinkedIn",
      startDate: "2016-12-31",
      url: "https://www.linkedin.com/learning/certificates/f9c15224a8cbf5f0467fedc161aaf66daa04898649f36a044389b74ca14f8094?trk=backfilled_certificate"
    },
    {
      name: "End-to-End JavaScript Testing with Cypress.io",
      issuer: "LinkedIn",
      startDate: "2021-07-31",
      url: "https://www.linkedin.com/learning/certificates/ceb4e973adea5feebcf4975d4f3fa963fab9dac5600584aa179c812feba6a26d?trk=backfilled_certificate"
    }
  ],
  publications: [],
  skills: [
    {
      name: "JavaScript",
      level: "",
      keywords: []
    },
    {
      name: "Technical Documentation",
      level: "",
      keywords: []
    },
    {
      name: "Creative Problem Solving",
      level: "",
      keywords: []
    },
    {
      name: "Troubleshooting",
      level: "",
      keywords: []
    },
    {
      name: "Perkins&Will",
      level: "",
      keywords: []
    },
    {
      name: "Cascading Style Sheets (CSS)",
      level: "",
      keywords: []
    },
    {
      name: "Responsive Web Design",
      level: "",
      keywords: []
    },
    {
      name: "Technical Support",
      level: "",
      keywords: []
    },
    {
      name: "Event Planning",
      level: "",
      keywords: []
    },
    {
      name: "MS Project",
      level: "",
      keywords: []
    },
    {
      name: "Jest",
      level: "",
      keywords: []
    },
    {
      name: "Logic Pro",
      level: "",
      keywords: []
    },
    {
      name: "Research",
      level: "",
      keywords: []
    },
    {
      name: "Consulting",
      level: "",
      keywords: []
    },
    {
      name: "Audio Engineering",
      level: "",
      keywords: []
    },
    {
      name: "Networking",
      level: "",
      keywords: []
    },
    {
      name: "HTML",
      level: "",
      keywords: []
    },
    {
      name: "Internationalization ",
      level: "",
      keywords: []
    },
    {
      name: "SASS",
      level: "",
      keywords: []
    },
    {
      name: "Technical Drawing",
      level: "",
      keywords: []
    },
    {
      name: "Git",
      level: "",
      keywords: []
    },
    {
      name: "i18n",
      level: "",
      keywords: []
    },
    {
      name: "Strategic Planning",
      level: "",
      keywords: []
    },
    {
      name: "IT Service Management",
      level: "",
      keywords: []
    },
    {
      name: "Leadership",
      level: "",
      keywords: []
    },
    {
      name: "Microsoft Office",
      level: "",
      keywords: []
    },
    {
      name: "Github",
      level: "",
      keywords: []
    },
    {
      name: "MongoDB",
      level: "",
      keywords: []
    },
    {
      name: "Network Administration",
      level: "",
      keywords: []
    },
    {
      name: "Public Speaking",
      level: "",
      keywords: []
    },
    {
      name: "Management",
      level: "",
      keywords: []
    },
    {
      name: "React.js",
      level: "",
      keywords: []
    },
    {
      name: "CAD",
      level: "",
      keywords: []
    },
    {
      name: "Social Media",
      level: "",
      keywords: []
    },
    {
      name: "Active Directory",
      level: "",
      keywords: []
    },
    {
      name: "Software as a Service (SaaS)",
      level: "",
      keywords: []
    },
    {
      name: "CSS",
      level: "",
      keywords: []
    },
    {
      name: "Technical Writing",
      level: "",
      keywords: []
    },
    {
      name: "Team Building",
      level: "",
      keywords: []
    },
    {
      name: "OS X",
      level: "",
      keywords: []
    },
    {
      name: "NoSQL",
      level: "",
      keywords: []
    },
    {
      name: "Linux",
      level: "",
      keywords: []
    },
    {
      name: "IT Consulting",
      level: "",
      keywords: []
    },
    {
      name: "Full-Stack Development",
      level: "",
      keywords: []
    },
    {
      name: "Computer Hardware",
      level: "",
      keywords: []
    },
    {
      name: "Software Documentation",
      level: "",
      keywords: []
    },
    {
      name: "System Administration",
      level: "",
      keywords: []
    },
    {
      name: "Business Process Improvement",
      level: "",
      keywords: []
    },
    {
      name: "Customer Service",
      level: "",
      keywords: []
    },
    {
      name: "Meteor.js",
      level: "",
      keywords: []
    },
    {
      name: "Adobe Creative Suite",
      level: "",
      keywords: []
    }
  ],
  languages: [
    {
      language: "English",
      fluency: "Native Speaker"
    }
  ],
  interests: [],
  references: [
    {
      name: "Sysouk Vongphasouk",
      reference: `It was a true pleasure knowing and working with Kiel while he ventured his career in the Southern California area. Kiel extrudes great confidence and positive energy.  Along with his upbeat spirit and team attitude, he is one of few, who makes the work environment feel that more enjoyable for all of his fellow peers.\r
\r
He is very knowledgeable in the IT field with a leading presence in helping others understand its complexity. He shows great professional curiosity while controlling his patience.  Kiel is organized, focus and has the determination to achieve results.\r
\r
Kiel's unique style and coolness is one of a kind.  It complements his positive attitude and I highly recommend knowing and anyway being part of Kiel.`
    },
    {
      name: "Keith Wanser, CPD",
      reference: "Kiel is a great Plumbing / Fire Protection designer.   He has good design techniques and works great in a team.  He is easy to get along with and has much knowledge in his field.  I can think of a few projects I could not have gotten through if it weren't for brainstorming with Kiel!  I hope one day to possibly have the chance to work with him again."
    }
  ],
  projects: [
    {
      name: "Strategic Mobility Plan - NORTA",
      startDate: "2017-05-31",
      summary: `\u2022 Narrated the 'Strategic Mobility Plan' as presented to the New Orleans Regional Transportation Authority.
\u2022 Produced and Edited final audio, mixed with video and converted to compressed video format.`,
      url: null,
      endDate: "2017-05-31"
    },
    {
      name: '"The MoBB"',
      startDate: "2017-12-31",
      summary: `\u2022 Map-based PWA; a crowd sourced and curated database of black-owned businesses in the USA with 1400+ listings
\u2022 Meteor, MongoDB, Google Analytics API, materialize-css, opengraph-io API, IpInfo API, Yelp API, Google Places API
\u2022 Opengraph API to pull the most recent images for each business
\u2022 Reactive geolocation-based \u201Cnearest business\u201D suggestions`,
      url: "http://mobb.kielbyrne.com",
      endDate: "2017-12-31"
    },
    {
      name: "Multimodal Transportation Plan-Fairfax",
      startDate: "2016-11-30",
      summary: `\u2022 Narrated the 'Multimodal Transportation Plan' as presented to the City of Fairfax.
\u2022 Produced and Edited final audio, mixed with video and converted to compressed video format.`,
      url: null,
      endDate: "2016-11-30"
    },
    {
      name: "The Diligent Citizen ",
      startDate: "2016-12-31",
      summary: `\u2022 Allowing end-users to be involved in the political decision-making process down to the district level, starting with a simple zipcode search
\u2022 Meteor, MongoDB, OpenData.gov API, SunlightLabs API
\u2022 Zipcode-based search for all district-related data via various APIs
\u2022 Pre-filled contact forms and templates
\u2022 Wordcloud to display trends in local bills/policies`,
      url: null,
      endDate: "2016-12-31"
    },
    {
      name: '"P+WITW"',
      startDate: "2019-02-28",
      summary: `\u2022 Location-based asset management web-app with over 2700 data points. 
\u2022 React, Redux, Material-UI, Google Maps API, ipInfo API, restDB API, MySQL, SASS, recharts, chromaJS, date-fns, material-table 
\u2022 PowerShell script as \u201Cagent\u201D on each asset, reports to mSQL DB
\u2022 ExpressJS API server communicates with mSQL DB and uses React and Google Maps to display graphs and asset locations
\u2022 End users may search, filter, sort and print data with material-table, view reactive svg charts with two-color interpolation and variable data points`,
      url: "http://pwitw.netlify.com",
      endDate: "2019-05-31"
    },
    {
      name: "wHY Architecture Consulting",
      startDate: "2013-01-31",
      summary: `\u2022 Configured home office for Founding Partner, including site-to-site connection to remote office location; allowing for the relocation of key staff and facilitation of business continuity during months-long office renovations.
\u2022 Repaired and reconfigured anti-virus, DHCP, DNS, and file sharing/storage (DFS/NAS) systems\u2014including the automation of backup processes.
\u2022 Automated logon processes for consistent end-user environments across offices and devices.`,
      url: null,
      endDate: "2013-08-31"
    }
  ]
};

// app/routes/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), formatDate = (date) => new Date(date).getFullYear(), styles = {
  sectionHeader: {
    fontSize: "26px",
    fontWeight: "700",
    marginTop: "20px",
    marginBottom: "20px",
    color: "#45505b"
  },
  listItem: {
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "-2px",
    borderLeft: "2px solid #622F75",
    position: "relative"
  },
  listItemBefore: {
    content: '""',
    position: "absolute",
    width: "16px",
    height: "16px",
    borderRadius: "50px",
    left: "-9px",
    top: "0",
    background: "#fff",
    border: "2px solid #622F75"
  },
  titleHeading: {
    lineHeight: "18px",
    fontSize: "18px",
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: "'Poppins', sans-serif",
    color: "#622F75",
    marginBottom: "10px"
  },
  dates: {
    fontSize: "16px",
    background: "#f7f8f9",
    padding: "5px 15px",
    display: "inline-block",
    fontWeight: "600",
    marginBottom: "10px"
  },
  institution: {
    fontStyle: "italic"
  }
};
function Index() {
  let { work, education, awards, skills, basics, certificates } = experience_default;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Sidebar, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ColorModeSwitch_default, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_react11.Box,
      {
        h: "100vh",
        bg: "rgba(255,0,0,0.1)",
        zIndex: "-10",
        bgImage: "url('https://kielbyrne.com/assets/img/coolkiel.jpg')",
        opacity: "15%",
        top: "0",
        bgSize: "cover",
        pos: "absolute",
        right: "0",
        left: "0",
        bottom: "0"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 80,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Box, { id: "hero", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { children: [
        "Kiel Hamilton ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "brand", children: " Byrne" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 95,
          columnNumber: 27
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Text, { children: [
        "I Am ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react_typed.default,
          {
            strings: [
              "a Software Developer",
              "an I.T. Consultant",
              "a Voice Actor / Audio Engineer",
              "a Father / Husband / Brethren",
              "an Alchemist",
              "a Life-Long Learner"
            ]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 99,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Box, { className: "social-links", h: 24, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "a",
          {
            href: "https://twitter.com/tdotholla",
            title: "twitter",
            className: "twitter",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "bx bxl-twitter" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 111,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "a",
          {
            href: "https://www.facebook.com/tdotholla",
            title: "facebook",
            className: "facebook",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "bx bxl-facebook" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 127,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 120,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "a",
          {
            href: "https://github.com/tdotholla",
            title: "github",
            className: "github",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "bx bxl-github" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 137,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 130,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "a",
          {
            href: "https://www.linkedin.com/in/KielByrne/",
            title: "linkedin",
            className: "linkedin",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "bx bxl-linkedin" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 146,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 139,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Box, { id: "spotifyBox", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { as: "h1", size: "lg", children: "Current Spotify Top Songs:" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ReactEmbedGist, { gist: "Kiel-H-Byrne/0b6d01415801c747c88b803e045e1cb0" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { as: "h1", size: "lg", children: "CAREER & EDUCATION" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Divider, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Box, { id: "resumeSummary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { as: "h1", size: "lg", children: basics.name }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Text, { as: "p", children: basics.summary }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.List, { id: "resumeEducation", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { style: styles.sectionHeader, children: "Education" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this),
        education.map((e) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react11.ListItem,
          {
            style: styles.listItem,
            _before: styles.listItemBefore,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { style: styles.titleHeading, children: e.area }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 176,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Text, { style: styles.dates, children: e.endDate }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 177,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Text, { style: styles.institution, children: e.institution }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 178,
                columnNumber: 17
              }, this)
            ]
          },
          e.institution,
          !0,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 171,
            columnNumber: 15
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.List, { id: "professionalExperience", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react11.Heading,
          {
            as: "h4",
            size: "md",
            color: "blackAlpha.500",
            style: styles.sectionHeader,
            children: "My professional and educational experiences."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 183,
            columnNumber: 13
          },
          this
        ),
        work.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react11.ListItem,
          {
            style: styles.listItem,
            _before: styles.listItemBefore,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { as: "h3", size: "md", children: w.position }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 197,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Box, { dir: "column", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { style: styles.titleHeading, children: w.position }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 201,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Heading, { style: styles.dates, children: [
                  formatDate(w.startDate),
                  "-",
                  formatDate(w.endDate)
                ] }, void 0, !0, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 202,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Text, { as: "p", style: styles.institution, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Link, { target: w.url, children: w.name }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 206,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 205,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Text, { as: "p", children: w.summary }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 208,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 200,
                columnNumber: 17
              }, this)
            ]
          },
          w.startDate,
          !0,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 192,
            columnNumber: 15
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 157,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 77,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

// app/routes/voice.tsx
var voice_exports = {};
__export(voice_exports, {
  default: () => voice_default
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), voice = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("audio", { src: "#", controls: !0 }, void 0, !1, {
  fileName: "app/routes/voice.tsx",
  lineNumber: 8,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/voice.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), voice_default = voice;

// server-entry-module:@remix-run/dev/server-build
var route3 = __toESM(require_blog());

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/dist/entry.client-DHI7Y2P7.js", imports: ["/dist/_shared/chunk-ZSN7MH76.js", "/dist/_shared/chunk-EEA5TVDN.js", "/dist/_shared/chunk-C4W5YLGS.js", "/dist/_shared/chunk-COY3C6BY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/dist/root-2OAZ6G5G.js", imports: ["/dist/_shared/chunk-KXMTRC37.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/dist/routes/blog-VXTGNCOF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/dist/routes/index-6LRRQF5W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/voice": { id: "routes/voice", parentId: "root", path: "voice", index: void 0, caseSensitive: void 0, module: "/dist/routes/voice-RO5XROTR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "f19c61a2", hmr: void 0, url: "/dist/manifest-F19C61A2.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/dist/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/voice": {
    id: "routes/voice",
    parentId: "root",
    path: "voice",
    index: void 0,
    caseSensitive: void 0,
    module: voice_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
