export default function SocialProof() {
  const brands = [
    { name: "Vortex Labs", symbol: "✦ VORTEX" },
    { name: "CloudSphere", symbol: "● CLOUDSPHERE" },
    { name: "HyperScale", symbol: "▲ HYPERSCALE" },
    { name: "DataPulse AI", symbol: "■ DATAPULSE" },
    { name: "Synthetix", symbol: "◆ SYNTHETIX" },
    { name: "ApexCore", symbol: "❖ APEXCORE" },
  ];

  return (
    <section className="py-12 border-y border-slate-200/70 bg-white/50 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Dünya çapında 5.000+ yenilikçi teknoloji şirketi tarafından tercih ediliyor
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="text-slate-400 hover:text-slate-700 transition-colors font-bold text-sm tracking-wider flex items-center justify-center p-2 grayscale hover:grayscale-0"
            >
              {brand.symbol}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
