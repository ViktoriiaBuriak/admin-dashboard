import React from "react";
import ProfileSettings from "../../components/settings/ProfileSettings";
import AppearanceSettings from "../../components/settings/AppearanceSettings";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <ProfileSettings />
      <AppearanceSettings />
    </div>
  );
};

export default SettingsPage;
