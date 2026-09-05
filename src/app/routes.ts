import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import CaseZapflix from "./pages/CaseZapflix";
import CaseDesignThinking from "./pages/CaseDesignThinking";
import CaseDiscoveryFlow from "./pages/CaseDiscoveryFlow";
import CaseConvexMindset from "./pages/CaseConvexMindset";
import CaseCIEE from "./pages/CaseCIEE";
import CaseJobiee from "./pages/CaseJobiee";
import Prompts from "./pages/Prompts";
import PromptMentorCarreira from "./pages/PromptMentorCarreira";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "case/confidencial", Component: CaseCIEE },
      { path: "case/zapflix", Component: CaseZapflix },
      { path: "case/design-thinking", Component: CaseDesignThinking },
      { path: "case/discovery-flow", Component: CaseDiscoveryFlow },
      { path: "case/convex-mindset", Component: CaseConvexMindset },
      { path: "case/jobiee", Component: CaseJobiee },
      { path: "prompts", Component: Prompts },
      { path: "prompts/mentor-de-carreiras", Component: PromptMentorCarreira },
      { path: "*", Component: NotFound },
    ],
  },
]);
