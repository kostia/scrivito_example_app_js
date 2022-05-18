import * as React from "react";
import * as Scrivito from "scrivito";
import { HelmetProvider } from "react-helmet-async";

import CurrentPageMetadata from "./Components/CurrentPageMetadata";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import Intercom from "./Components/Intercom";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";
import CookieConsentBanner from "./Components/CookieConsentBanner";
import Tracking from "./Components/Tracking";
import { CookieConsentProvider } from "./Components/CookieConsentContext";
import Logo from "./Components/Navigation/Logo";

export const helmetContext = {};

export default function App() {
  return (
    <ErrorBoundary>
      <CookieConsentProvider>
        <HelmetProvider context={helmetContext}>
          <div className="jr-wrapper">
            <div className="jr-topbar">
              <div className="jr-buttonbar jr-app-switcher">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="jr-buttonbar jr-brand-settings" />
              <div className="jr-buttonbar jr-user ms-auto">
                <i className="jr-icon jr-icon-user" />
                <span className="label user-name">
                  Jane Smith
                  <span className="user-meta">jane.smith@example.com</span>
                </span>
              </div>
            </div>
            <div className="jr-main-wrapper">
              <Scrivito.CurrentPage />
              <NotFoundErrorPage />
            </div>
            <Footer />
            <CurrentPageMetadata />
            <CookieConsentBanner />
            <Tracking />
            <Intercom />
          </div>
        </HelmetProvider>
      </CookieConsentProvider>
    </ErrorBoundary>
  );
}
