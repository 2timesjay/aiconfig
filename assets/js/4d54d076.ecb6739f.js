"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[80],{4651:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=i(5893),s=i(1151);const t={sidebar_position:15},r="Contributing Guidelines",c={id:"contributing",title:"Contributing Guidelines",description:"\ud83d\udc4b Welcome and thank you for your interest in contributing to AIConfig!",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/contributing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"docSidebar",previous:{title:"Extensibility",permalink:"/docs/extensibility"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},l={},a=[{value:"<strong>Ways to Contribute</strong>",id:"ways-to-contribute",level:3},{value:"<strong>1. Code Contributions</strong>",id:"1-code-contributions",level:3},{value:"<strong>2. Cookbooks</strong>",id:"2-cookbooks",level:3},{value:"<strong>Examples:</strong>",id:"examples",level:4},{value:"<strong>3. Bugs</strong>",id:"3-bugs",level:3},{value:"<strong>Bug Fixing</strong>",id:"bug-fixing",level:4},{value:"<strong>Bug Reports</strong>",id:"bug-reports",level:4},{value:"<strong>4. Feature Requests</strong>",id:"4-feature-requests",level:3},{value:"<strong>5. Documentation</strong>",id:"5-documentation",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"contributing-guidelines",children:"Contributing Guidelines"}),"\n",(0,o.jsx)(n.p,{children:"\ud83d\udc4b Welcome and thank you for your interest in contributing to AIConfig!"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"ways-to-contribute",children:(0,o.jsx)(n.strong,{children:"Ways to Contribute"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Code Contributions"}),": We always welcome code contributions to the library. In particular, ",(0,o.jsx)(n.em,{children:"model-parsers"}),", ",(0,o.jsx)(n.em,{children:"extensions"}),", and ",(0,o.jsx)(n.em,{children:"cookbooks"})," are areas that can always use contributions."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Cookbooks"}),": Showcase innovative ways and use cases to use AIConfig in your code through a cookbook."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Bugs"}),": File a bug report when you encounter an issue and/or submit a fix for the bug."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Feature Requests"}),": Submit feature or enhancement requests to help guide our roadmap."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Documentation"}),": Contribute documentation to make it easier for others using the library."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"1-code-contributions",children:(0,o.jsx)(n.strong,{children:"1. Code Contributions"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"aiconfig/\n\u251c\u2500 cookbook/\n\u251c\u2500 cli/\n\u251c\u2500 editor/\n\u251c\u2500 aiconfig-docs/\n\u251c\u2500 python/\n\u251c\u2500 typescript/\n\u251c\u2500 extensions/\n"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Model Parsers"}),": Model Parsers manage the connection to foundation models. By default, we provide Model Parsers for OpenAI and Google PaLM models. The Model Parsers are defined in both ",(0,o.jsx)(n.code,{children:"python"})," and ",(0,o.jsx)(n.code,{children:"typescript"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Instructions for contributing a Model Parser:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Add a folder under ",(0,o.jsx)(n.code,{children:"aiconfig/extensions"})]}),"\n",(0,o.jsxs)(n.li,{children:["Define the requirements. For ",(0,o.jsx)(n.code,{children:"python"}),", you'll need to set up ",(0,o.jsx)(n.code,{children:"pyproject.toml"}),". For ",(0,o.jsx)(n.code,{children:"typescript"}),", you'll need a ",(0,o.jsx)(n.code,{children:"package.json"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Naming convention for the extension"}),": ",(0,o.jsx)(n.em,{children:"aiconfig-extension-NAME_OF_MODEL_PARSER"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Extend from ",(0,o.jsx)(n.code,{children:"ModelParser"})," class, and implement ",(0,o.jsx)(n.code,{children:"serialize"}),", ",(0,o.jsx)(n.code,{children:"deserialize"})," and ",(0,o.jsx)(n.code,{children:"run"})," functions"]}),"\n",(0,o.jsxs)(n.li,{children:["We highly recommend adding a cookbook under ",(0,o.jsx)(n.code,{children:"aiconfig/cookbooks"})," for a guide on using your Model Parser"]}),"\n",(0,o.jsx)(n.li,{children:"Submit a PR for the lastmile team to review the extension and cookbook"}),"\n",(0,o.jsxs)(n.li,{children:["Finally, publish your extension package on ",(0,o.jsx)(n.code,{children:"pypi"})," and/or ",(0,o.jsx)(n.code,{children:"npm"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Extensions"}),": Other than Model Parsers, there are opportunities to publish extensions that can connect ",(0,o.jsx)(n.code,{children:"aiconfig"})," with other useful Generative AI libraries."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"2-cookbooks",children:(0,o.jsx)(n.strong,{children:"2. Cookbooks"})}),"\n",(0,o.jsx)(n.p,{children:"Create a small app to add to our cookbook to showcase your use case or innovative idea."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Important"})," - Each app in the cookbook must have a ",(0,o.jsx)(n.em,{children:"README"}),". We want to ensure that developers can easily use the cookbook."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Cookbook apps can be in typescript or python. And, you can decide on whether to showcase it as a ",(0,o.jsx)(n.em,{children:"console app"}),", ",(0,o.jsx)(n.em,{children:"ipython notebook"}),", etc."]}),"\n",(0,o.jsx)(n.h4,{id:"examples",children:(0,o.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Basic-Prompt-Routing",children:"Basic Prompt Routing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Chain-of-Verification",children:"Chain of Verification"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Wizard-GPT",children:"Wizard GPT"})}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"3-bugs",children:(0,o.jsx)(n.strong,{children:"3. Bugs"})}),"\n",(0,o.jsx)(n.h4,{id:"bug-fixing",children:(0,o.jsx)(n.strong,{children:"Bug Fixing"})}),"\n",(0,o.jsxs)(n.p,{children:["We track bugs in ",(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/labels",children:"Github issues"})," with the ",(0,o.jsx)(n.code,{children:"bug"})," label."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you're a first-time contributor, a good option is to find an issue tagged ",(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/labels/good%20first%20issue",children:(0,o.jsx)(n.code,{children:"good first issue"})})]}),"\n",(0,o.jsxs)(n.li,{children:["If you're looking to fix a few bugs (we greatly appreciate it), the issues are tagged with ",(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/labels/bug",children:(0,o.jsx)(n.code,{children:"bug"})})]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"bug-reports",children:(0,o.jsx)(n.strong,{children:"Bug Reports"})}),"\n",(0,o.jsxs)(n.p,{children:["File a bug report in ",(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/labels",children:"Github issues"})," with the ",(0,o.jsx)(n.code,{children:"bug"})," label. We try to triage the feature requests daily. Please include as much detail as possible in the report."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"4-feature-requests",children:(0,o.jsx)(n.strong,{children:"4. Feature Requests"})}),"\n",(0,o.jsxs)(n.p,{children:["We track feature requests in ",(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/labels",children:"Github issues"})," with the ",(0,o.jsx)(n.code,{children:"enhancement"})," label. We try to triage the feature requests daily. Please include as much detail as possible in the request."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"5-documentation",children:(0,o.jsx)(n.strong,{children:"5. Documentation"})}),"\n",(0,o.jsxs)(n.p,{children:["We have our documentation source controlled in the ",(0,o.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/aiconfig-docs",children:(0,o.jsx)(n.code,{children:"aiconfig/aiconfig-docs"})})," directory. The docs are published to our ",(0,o.jsx)(n.a,{href:"https://aiconfig.lastmileai.dev/docs/basics",children:"LastMile AI AIConfig website"}),". Feel free to contribute documentation fixes and improvements and the LastMile team will review."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var o=i(7294);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);