import { Switch, Route, Router as WouterRouter } from "wouter"
import { SmoothScroll } from "@/components/smooth-scroll"
import HomePage from "@/pages/home"
import AboutPage from "@/pages/about"
import StoryPage from "@/pages/story"
import PrivacyPage from "@/pages/privacy"
import NotFound from "@/pages/not-found"

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/story" component={StoryPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <div className="noise-overlay" aria-hidden="true" />
      <SmoothScroll>
        <Router />
      </SmoothScroll>
    </WouterRouter>
  )
}

export default App
