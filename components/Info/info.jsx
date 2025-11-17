"use client";

export default function NoCodeSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT TEXT */}
        <div>
          <h3 className="text-sm font-semibold text-blue-600 mb-3">
            No-Code Tools
          </h3>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Support for every flow without writing a single line of code
          </h2>

          <p className="text-lg text-slate-600 mb-6 max-w-xl">
            Build payment flows, onboarding logic, and automations visually.  
            Everything deploys instantly and scales automatically.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Try visual builder
            </button>

            <button className="px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
              Explore templates
            </button>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
            <li>Visual flow builder</li>
            <li>Prebuilt connectors</li>
            <li>Instant test mode</li>
            <li>One-click publish</li>
          </ul>
        </div>

        {/* RIGHT SIDE STATIC CARDS */}
        <div className="relative flex flex-col gap-6">
          
          {/* Row 1 */}
          <div className="flex gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white w-1/2 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <h4 className="font-semibold text-slate-900 mb-1">Build flows visually</h4>
              <p className="text-sm text-slate-600">
                Drag & drop steps, inputs, and conditions without coding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-white w-1/2 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <h4 className="font-semibold text-slate-900 mb-1">Prebuilt templates</h4>
              <p className="text-sm text-slate-600">
                Ready-to-use flows for payments and subscriptions.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-white w-3/5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <h4 className="font-semibold text-slate-900 mb-1">Test instantly</h4>
              <p className="text-sm text-slate-600">
                Validate flows in sandbox mode with real events.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white w-2/5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <h4 className="font-semibold text-slate-900 mb-1">Deploy fast</h4>
              <p className="text-sm text-slate-600">
                Publish live in one click. No engineering required.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
