export default function Settings() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-2xl w-full px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <p className="text-gray-600 mb-8">
          Manage your account, preferences, and application settings here.
        </p>

        <div className="space-y-4 text-left">
          <div className="p-4 border rounded-xl bg-white shadow">
            <h2 className="font-semibold text-lg">Account</h2>
            <p className="text-sm text-gray-500">
              Update your email, password, and profile details.
            </p>
          </div>

          <div className="p-4 border rounded-xl bg-white shadow">
            <h2 className="font-semibold text-lg">Preferences</h2>
            <p className="text-sm text-gray-500">
              Customize your theme, language, and notification options.
            </p>
          </div>

          <div className="p-4 border rounded-xl bg-white shadow">
            <h2 className="font-semibold text-lg">Security</h2>
            <p className="text-sm text-gray-500">
              Enable two-factor authentication and manage security settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
