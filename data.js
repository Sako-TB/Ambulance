/* ─────────────────────────────────────────────────────────────────────────────
   Tomorrow.bio · Fleet Parts Reference — DATA
   Edit part numbers, vehicles and notes here. index.html renders everything
   from this file. Last verified: 02.10.2026 against the sources listed below.
   ───────────────────────────────────────────────────────────────────────────── */

const FLEET_DATA = {
  updated: "02.10.2026",

  /* ── Catalogue (Autodoc / TecDoc) vehicle pages ─────────────────────────── */
  catalog: {
    "416": {
      label: "Sprinter 4,6-t Pritsche/Fahrgestell (906) · 416 CDI · 120 kW · 2009–2018 · OM 651.955/956/957",
      short: "416 CDI 4,6-t Pritsche/Fahrgestell (906)",
      url: "https://www.autodoc.de/ersatzteile/mercedes-benz/sprinter/sprinter-4-6-t-pritsche-fahrgestell-906/32902-416-cdi-906-153-906-155-906-253-906-255",
      id: "32902"
    },
    "415": {
      label: "Sprinter 4,6-t Pritsche/Fahrgestell (906) · 415 CDI · 110 kW · 2006–2009 · OM 646.986/989/990",
      short: "415 CDI 4,6-t Pritsche/Fahrgestell (906)",
      url: "https://www.autodoc.de/ersatzteile/mercedes-benz/sprinter/sprinter-4-6-t-pritsche-fahrgestell-906/32916-415-cdi-906-153-906-155-906-253-906-255",
      id: "32916"
    },
    "316K": {
      label: "Sprinter 3,5-t Kasten (906) · 316 CDI · 120 kW · 2009–2018",
      short: "316 CDI 3,5-t Kasten (906)",
      url: "https://www.autodoc.de/ersatzteile/mercedes-benz/sprinter/sprinter-3-5-t-kasten-906/32885-316-cdi-906-631-906-633-906-635-906-637",
      id: "32885"
    },
    "316P": {
      label: "Sprinter 3,5-t Pritsche/Fahrgestell (906) · 316 CDI · 120 kW · 2009–2018",
      short: "316 CDI 3,5-t Pritsche/Fahrgestell (906)",
      url: "https://www.autodoc.de/ersatzteile/mercedes-benz/sprinter/sprinter-3-5-t-pritsche-fahrgestell-906/32886-316-cdi-906-131-906-133-906-135-906-231-906-233",
      id: "32886"
    }
  },

  /* ── Vehicles ───────────────────────────────────────────────────────────── */
  vehicles: [
    {
      id: "1770", plate: "B IO 1770", holder: "Tomorrow Biostasis GmbH",
      body: "Sonder-Kfz Bestattungswagen / Rettungswagen geschlossen",
      note: "Ex-RTW of the Rettungsdienst Landkreis Oder-Spree (former plate LOS OY 130).",
      vin: "WDB9061531N565647", model: "906.153", typ: "906BA50 · FFMD1460N · MFD3LVA3",
      hsn: "1313", tsn: "00000000",
      engine: "OM651", power: "120 kW @ 3800", displacement: "2143 cm³",
      emission: "Euro VI BlueTEC (AdBlue)", emissionDetail: "EURO VI; A; M, N · 595/2009*64/2012A · key 66A0",
      firstReg: "26.11.2013", facelift: true, adblue: true, brakes: "twin", fuelFilter: "5pin", catalog: "416",
      gvw: "3500 kg registered · 4600 kg technically possible (down-rated)", gvwClass: "4.6 t chassis, down-rated to 3.5 t",
      axleLoads: "1850 / 3200 kg", tyres: "195/75 R16C 107/105R · twin rear wheels",
      dims: "6400 × 2170 × 2820 mm", kerb: "3200 kg",
      hu: "06/2027", docDate: "04.08.2025", docOld: false,
      extras: "Factory auxiliary heater (Zusatzheizung)."
    },
    {
      id: "1771", plate: "B IO 1771", holder: "Tomorrow Biostasis GmbH",
      body: "Sonder-Kfz Bestattungswagen",
      note: "Only vehicle with the older OM646 engine (315 CDI class, 110 kW).",
      vin: "WDB9061531N390823", model: "906.153", typ: "906 OK 50",
      hsn: "1313", tsn: "ATL00000",
      engine: "OM646", power: "110 kW @ 3800", displacement: "2148 cm³",
      emission: "Euro 4", emissionDetail: "1999/96/EG B1 · 2005/55*2006/51C · key 0681 · PMK 2",
      firstReg: "14.11.2008", facelift: false, adblue: false, brakes: "twin", fuelFilter: "om646", catalog: "415",
      gvw: "3500 kg registered · 4600 kg technically possible (down-rated)", gvwClass: "4.6 t chassis, down-rated to 3.5 t",
      axleLoads: "2000 / 3200 kg", tyres: "205/75 R16C 110/108R · twin rear wheels",
      dims: "6480 × 2160 × 2870 mm", kerb: "3090 kg",
      hu: "03/2021", docDate: "16.04.2020", docOld: true,
      extras: "Factory auxiliary heater, rear step (Trittstufe)."
    },
    {
      id: "1772", plate: "B IO 1772", holder: "Tomorrow Biostasis GmbH",
      body: "Leichenwagen · M1 (Fz. z. Pers.bef. bis 8 Spl.)",
      note: "",
      vin: "WDB9061531N459277", model: "906.153", typ: "906 OK 50 · FFMD1460N · MCD3GXA3",
      hsn: "1313", tsn: "00000000",
      engine: "OM651", power: "120 kW @ 3800", displacement: "2143 cm³",
      emission: "Euro 5", emissionDetail: "1999/96/EG B2 · 2005/55*2008/74G · key 0684 · PMK 2",
      firstReg: "03.12.2010", facelift: false, adblue: false, brakes: "twin", fuelFilter: "5pin", catalog: "416",
      gvw: "3500 kg registered · 4600 kg technically possible (down-rated)", gvwClass: "4.6 t chassis, down-rated to 3.5 t",
      axleLoads: "1850 / 3200 kg", tyres: "195/75 R16C 107/105R · twin rear wheels",
      dims: "6350 × 2120 × 2880 mm", kerb: "3150 kg",
      hu: "05/2026", docDate: "01.12.2025", docOld: false,
      extras: ""
    },
    {
      id: "1773", plate: "B IO 1773", holder: "Tomorrow Biostasis GmbH",
      body: "Sonder-Kfz Bestattungswagen (panel van)",
      note: "Only panel van in the fleet; single rear wheels; early OM651 with the 3-pin fuel filter.",
      vin: "WDB9066331S429126", model: "906.633", typ: "906 KA 35 · LMMD1388N · MCC2GXA3",
      hsn: "1313", tsn: "00000000",
      engine: "OM651", power: "120 kW @ 3800", displacement: "2143 cm³",
      emission: "Euro 5", emissionDetail: "1999/96/EG B2 · 2005/55*2008/74G · key 0684 · PMK 2",
      firstReg: "28.01.2010", facelift: false, adblue: false, brakes: "single", fuelFilter: "3pin", catalog: "316K",
      gvw: "3500 kg registered · 3880 kg technically", gvwClass: "3.5 t panel van",
      axleLoads: "1800 / 2430 kg", tyres: "235/65 R16C 115/113R · single rear wheels",
      dims: "5910 × 1993 × 2760 mm", kerb: "3080 kg",
      hu: "07/2024", docDate: "24.08.2023", docOld: true,
      extras: "Factory auxiliary heater, roof fan (Dachlüfter), rear step, work lights, transport system in the load compartment."
    },
    {
      id: "1774", plate: "B IO 1774", holder: "Tomorrow Biostasis GmbH",
      body: "Leichenwagen · M1",
      note: "",
      vin: "WDB9061531N531288", model: "906.153", typ: "906BA50 · FFMD1460N · MCD3KTA3",
      hsn: "1313", tsn: "00000000",
      engine: "OM651", power: "120 kW @ 3800", displacement: "2143 cm³",
      emission: "EEV", emissionDetail: "1999/96/EG C; EEV · 2005/55*2008/74K · key 0691",
      firstReg: "12.12.2012", facelift: false, adblue: false, brakes: "twin", fuelFilter: "5pin", catalog: "416",
      gvw: "3500 kg registered · 4600 kg technically possible (down-rated)", gvwClass: "4.6 t chassis, down-rated to 3.5 t",
      axleLoads: "1850 / 3200 kg", tyres: "195/75 R16C 107/105R · twin rear wheels",
      dims: "6250 × 2160 × 2900 mm", kerb: "3150 kg",
      hu: "07/2026", docDate: "08.12.2025", docOld: false,
      extras: "Auxiliary heater (approved if factory-fitted), roof window (Dachfenster)."
    },
    {
      id: "1775", plate: "B IO 1775", holder: "Tomorrow Biostasis GmbH",
      body: "Leichenwagen · M1",
      note: "",
      vin: "WDB9061531N565800", model: "906.153", typ: "906BA50 · FFMD1460N · MFD3LVA3",
      hsn: "1313", tsn: "00000000",
      engine: "OM651", power: "120 kW @ 3800", displacement: "2143 cm³",
      emission: "Euro VI BlueTEC (AdBlue)", emissionDetail: "EURO VI; A; M, N · 595/2009*64/2012A · key 66A0",
      firstReg: "26.11.2013", facelift: true, adblue: true, brakes: "twin", fuelFilter: "5pin", catalog: "416",
      gvw: "3500 kg registered · 4600 kg technically possible (down-rated)", gvwClass: "4.6 t chassis, down-rated to 3.5 t",
      axleLoads: "1850 / 3200 kg", tyres: "195/75 R16C 107/105R · twin rear wheels",
      dims: "6400 × 2170 × 2920 mm", kerb: "3150 kg",
      hu: "07/2026", docDate: "08.12.2025", docOld: false,
      extras: "Auxiliary heater (approved if factory-fitted), roof window (Dachfenster)."
    },
    {
      id: "ZH", plate: "ZH 651 988", holder: "European Biostasis Foundation, Rafz",
      body: "Lieferwagen · Kasten body",
      note: "Swiss registration (Strassenverkehrsamt Kanton Zürich). First registered in Germany, re-registered in Zürich 31.05.2024. Insurance: AXA.",
      vin: "WDB9061331N459660", model: "906.133", typ: "Swiss type approval 3MH6 82 C · Stammnummer 162.772.995",
      hsn: "—", tsn: "—",
      engine: "OM651", power: "120 kW", displacement: "2143 cm³",
      emission: "Euro 5", emissionDetail: "Swiss emission code EURO 5",
      firstReg: "03.02.2011 (D)", facelift: false, adblue: false, brakes: "single", fuelFilter: "5pin", catalog: "316P",
      gvw: "3500 kg", gvwClass: "3.5 t chassis cab with box body",
      axleLoads: "—", tyres: "Not printed on the Fahrzeugausweis — read the B-pillar placard (906.133 is normally 235/65 R16C, single rear wheels)",
      dims: "—", kerb: "3300 kg (payload only 200 kg)",
      hu: "MFK 31.05.2024 / ZH", docDate: "31.05.2024", docOld: false,
      extras: "Seats in the cargo area may not be used while driving (Swiss registration note)."
    }
  ],

  /* ── Engine service parts ───────────────────────────────────────────────── */
  engines: {
    OM651: {
      name: "OM651 · 2.1 L four-cylinder (316 / 416 CDI, 120 kW)",
      oilCapacity: "11.5 L with filter (Mercedes operator's manual)",
      parts: [
        { item: "Oil filter element with O-rings", oe: "A 651 180 01 09", oeAlt: "earlier A 651 180 00 09, same part",
          am: "MANN HU 7010 z · Hengst E11H D204 · Mahle OX 153/7D2 · Bosch F 026 407 112",
          notes: "64 × 31 × 110 mm cartridge · cap 25 Nm · every oil change" },
        { item: "Drain plug sealing ring", oe: "N 007603 014106", oeAlt: "Cu 14 × 20 × 1.5",
          am: "Elring 115.100 · Victor Reinz 41-70089-00 · plug with seal: Elring 877.840",
          notes: "new ring every oil change · plug M14 × 1.5, 30 Nm" },
        { item: "Air filter", oe: "A 000 090 37 51", oeAlt: "earlier A 000 090 26 51",
          am: "MANN C 4312/1 · Mahle LX 1845 · Hengst E821L · Bosch F 026 400 055",
          notes: "355 × 265 × 58 mm · every 3rd oil change, max 4 years · same part on OM646" },
        { item: "Cabin filter, dust", oe: "A 906 830 02 18", oeAlt: "",
          am: "MANN CU 3569 · Mahle LA 307 · Hengst E2916LI · Bosch 1 987 432 213",
          notes: "357 × 238 × 35 mm · left air intake at the base of the windscreen · every Service B, max 2 years" },
        { item: "Cabin filter, activated carbon (Tempmatic A/C)", oe: "A 906 830 03 18", oeAlt: "",
          am: "MANN CUK 3569 · Mahle LAK 307 · Hengst E2916LC · Bosch 1 987 432 513",
          notes: "same size as the dust filter" },
        { item: "Glow plugs (4)", oe: "A 001 159 66 01", oeAlt: "also A 001 159 58 01 / 57 01",
          am: "Bosch 0 250 603 024 (Duraspeed) · Beru GN1001 · Denso DG-617 · Champion CH923",
          notes: "7 V, M8 × 1, 148 mm, max 12 Nm · a few late OM651 use the M10 × 1 plug A 001 159 80 01 (Bosch 0 250 703 008): check the thread of the old plug" },
        { item: "Poly-V belt, main drive", oe: "A 002 993 32 96", oeAlt: "",
          am: "Gates 6PK2213 · ContiTech 6PK2215 · Bosch 1 987 946 275 · SKF VKMV 6PK2211",
          notes: "6 ribs, approx. 2213 mm · every 4th oil change" },
        { item: "A/C compressor belt", oe: "A 002 993 28 96", oeAlt: "",
          am: "ContiTech 6PK1124 ELAST · Gates 6PK1124SF · Dayco 6PK1124EE",
          notes: "elastic stretch belt, no tensioner, fitting tool needed" },
        { item: "Belt tensioner", oe: "A 651 200 18 70", oeAlt: "with start/stop (ECO): A 651 200 12 70",
          am: "INA 534 0337 10 · Gates T39166 · SKF VKM 38882 (start/stop: INA 534 0444 10)",
          notes: "" },
        { item: "Tension and idler pulleys", oe: "A 651 200 03 70", oeAlt: "idlers A 651 200 07 70 · 02 70 · 06 70",
          am: "Febi 40440",
          notes: "renew with the belt when bearings are noisy" }
      ],
      fuelFilters: {
        "3pin": [
          { item: "Fuel filter element, 3-pin (early OM651)", oe: "A 642 090 16 52", oeAlt: "the separate 180 W heater A 642 092 02 01 stays in place",
            am: "MANN WK 820/2 x · Hengst H140WK02 · Mahle KL 723D",
            notes: "OM651 up to engine no. 30 355560 (built to 14.09.2010 per Mercedes EPC) · 3-pin plug on the heater · replace element and seal only · confirm the connector before ordering" }
        ],
        "5pin": [
          { item: "Fuel filter, 5-pin, without water separator", oe: "A 651 090 31 52", oeAlt: "",
            am: "MANN WK 820/16 · Mahle KL 914 · Hengst H411WK · Bosch F 026 402 838",
            notes: "5-pin plug, no hose at the bottom · every Service B" },
          { item: "Fuel filter, 5-pin, with water separator (option KL5)", oe: "A 651 090 29 52", oeAlt: "also A 651 090 15 52",
            am: "MANN WK 820/18 · Mahle KL 912 · UFI 24.149.00",
            notes: "fitted when a water-drain hose is present · hose clamps A 004 997 20 90 and A 006 997 18 90 are in the Mercedes kits" }
        ]
      }
    },
    OM646: {
      name: "OM646 · 2.2 L four-cylinder (315 / 415 CDI, 110 kW)",
      oilCapacity: "approx. 11.0 L with filter (fill to the dipstick)",
      parts: [
        { item: "Oil filter element with O-rings", oe: "A 611 180 00 09", oeAlt: "",
          am: "MANN HU 718/1 k · Mahle OX 153D3 · Hengst E11H D57 · Bosch P 7001 (1 457 437 001)",
          notes: "64 × 115 mm cartridge · cap 25 Nm · every oil change" },
        { item: "Drain plug sealing ring", oe: "N 007603 014106", oeAlt: "plug A 111 997 03 30 (M14 × 1.5)",
          am: "Elring 115.100 · plug with seal: Elring 877.840",
          notes: "30 Nm" },
        { item: "Air filter", oe: "A 000 090 37 51", oeAlt: "",
          am: "MANN C 4312/1 · Mahle LX 1845 · Hengst E821L · Bosch F 026 400 055",
          notes: "every 3rd oil change, max 4 years" },
        { item: "Cabin filter, dust", oe: "A 906 830 02 18", oeAlt: "",
          am: "MANN CU 3569 · Mahle LA 307 · Hengst E2916LI · Bosch 1 987 432 213",
          notes: "357 × 238 × 35 mm · every Service B, max 2 years" },
        { item: "Cabin filter, activated carbon (Tempmatic A/C)", oe: "A 906 830 03 18", oeAlt: "",
          am: "MANN CUK 3569 · Mahle LAK 307 · Hengst E2916LC · Bosch 1 987 432 513",
          notes: "" },
        { item: "Glow plugs (4)", oe: "A 001 159 48 01", oeAlt: "also A 001 159 49 01",
          am: "Bosch 0 250 202 142 (Duraterm) · Beru GN003 · NGK Y-745U",
          notes: "11.5 V, M10 × 1, 130 mm, 15 Nm" },
        { item: "Poly-V belt, main drive", oe: "A 001 993 86 96", oeAlt: "second alternator / auxiliary drive: 6PK2285 (A 001 993 17 96)",
          am: "ContiTech 6PK2260 · Gates 6PK2260 · INA FB 6PK2260 · Bosch 1 987 945 981",
          notes: "measure the old belt before ordering" },
        { item: "A/C compressor belt", oe: "A 001 993 39 96", oeAlt: "also A 001 993 38 96",
          am: "Dayco 6PK691EE · Gates 6PK691SF",
          notes: "elastic stretch belt" },
        { item: "Belt tensioner", oe: "A 646 200 05 70", oeAlt: "supersedes A 646 200 02 70 / 03 70",
          am: "INA 534 0481 10 · Gates T38415",
          notes: "" },
        { item: "Idler pulleys", oe: "A 000 202 00 19 (2 needed)", oeAlt: "with cap: A 000 202 09 19",
          am: "INA 532 0160 10 · Febi 11276",
          notes: "" },
        { item: "Injector copper seals (4)", oe: "A 611 017 00 60", oeAlt: "",
          am: "Victor Reinz 70-31598-00 · Febi 29140",
          notes: "\"black death\" prevention: inspect under the engine cover at every service · always with a new injector clamp stretch bolt" }
      ],
      fuelFilters: {
        "om646": [
          { item: "Fuel filter with water-sensor connection", oe: "A 642 092 01 01", oeAlt: "supersessions A 642 092 05 01 / 07 01 · Mercedes pack A 000 180 53 09",
            am: "MANN WK 842/23 x · Hengst H278WK · Mahle KL 228/2D · Bosch F 026 402 056",
            notes: "fitted when a 2-pin sensor plug sits at the bottom of the canister (left side of the engine bay) · 87 × 100 mm" },
          { item: "Fuel filter without sensor", oe: "A 646 092 05 01", oeAlt: "replaces A 646 092 03 01 · Mercedes pack A 000 180 33 09",
            am: "MANN WK 820/1 · Hengst H140WK01 · Mahle KL 313 · Bosch 1 457 434 437",
            notes: "fitted when the canister has no connector" }
        ]
      }
    }
  },

  /* ── Brakes ─────────────────────────────────────────────────────────────── */
  brakes: {
    twin: {
      name: "4.6 t twin-rear-wheel chassis (906.153)",
      vehicles: "B IO 1770 · 1771 · 1772 · 1774 · 1775",
      parts: [
        { item: "Front discs (2), vented", oe: "A 906 421 00 12", am: "ATE 24.0128-0203.1 · Brembo 09.9508.11 · TRW DF4822S · Textar 92301203 · Zimmermann 400.6476.20", notes: "300 × 28 mm, wear limit 25 mm · same disc as the 3.5 t vans" },
        { item: "Front pads, WVA 29200", oe: "A 906 421 15 00", oeAlt: "also A 906 421 03 00", am: "Brembo P 50 059 · ATE 13.0460-4725.2 · TRW GDB1696 · Textar 2920006 · Bosch 0 986 494 194", notes: "169 × 73.5 × 21 mm" },
        { item: "Front wear sensors (2)", oe: "A 906 540 15 17", am: "ATE 24.8190-0424.2 · Bosch 1 987 473 037 · Febi 29414", notes: "the sensor in the Mercedes front kits" },
        { item: "Rear discs (2), vented", oe: "A 906 423 01 12", am: "ATE 24.0128-0202.1 · Brembo 09.9510.11 · TRW DF4919S · Textar 93143403 · Zimmermann 400.6478.20", notes: "303 × 28 mm, wear limit 25 mm · twin-wheel axle only" },
        { item: "Rear pads, WVA 29217", oe: "A 006 420 45 20", oeAlt: "also A 006 420 22 20", am: "Brembo P 50 060 · ATE 13.0460-3842.2 · TRW GDB1699 · Textar 2921702 · Bosch 0 986 494 122", notes: "165 × 79 × 21 mm" },
        { item: "Rear wear sensors (2)", oe: "A 906 540 14 17", oeAlt: "or A 906 540 15 17 — other cable length", am: "ATE 24.8190-0424.2 · Bosch 1 987 473 037", notes: "check whether the rear calipers carry a sensor cable" },
        { item: "Parking-brake shoes (drum-in-hat)", oe: "A 906 420 04 20", am: "Brembo S 50 521 · Textar 91069000 · Bosch 0 986 487 751 (with fitting kit) · TRW fitting kit SFK416", notes: "172 × 42 mm" },
        { item: "Mercedes repair kits (discs, pads, sensors per axle)", oe: "front \"5-Tonner\" A 906 421 10 00 · rear \"5-Tonner\" A 906 423 06 00", am: "—", notes: "the shop checks the VIN", links: [
          ["front kit", "https://originalteile.mercedes-benz.de/rep.-satz-bremse-vorderachse-fuer-sprinter-906-5-tonner/a9064211000"],
          ["rear kit", "https://originalteile.mercedes-benz.de/rep.-satz-bremse-hinterachse-fuer-sprinter-906-5-tonner/a9064230600"]] }
      ]
    },
    single: {
      name: "3.5 t single-rear-wheel (906.633 panel van, 906.133 chassis)",
      vehicles: "B IO 1773 · ZH 651 988",
      parts: [
        { item: "Front discs (2), vented", oe: "A 906 421 00 12", am: "ATE 24.0128-0203.1 · Brembo 09.9508.11 · TRW DF4822S · Textar 92301203", notes: "300 × 28 mm, wear limit 25 mm" },
        { item: "Front pads, standard, WVA 29192", oe: "A 906 421 16 00", oeAlt: "also A 906 421 04 00", am: "Brembo P 50 085 · ATE 13.0460-4826.2 · TRW GDB1698 · Textar 2919202 · Bosch 0 986 494 121", notes: "163 × 67 × 21 mm · if the old pad measures 169 mm the van has the heavy-duty brake: use the 4.6 t pads WVA 29200 (A 906 421 15 00)" },
        { item: "Front wear sensors (2)", oe: "A 906 540 15 17", am: "ATE 24.8190-0424.2 · Bosch 1 987 473 037", notes: "" },
        { item: "Rear discs (2), solid", oe: "A 906 423 00 12", am: "ATE 24.0116-0121.1 · Brembo 08.9509.11 · TRW DF4823S · Textar 93143303 · Bosch 0 986 479 295", notes: "298 × 16 mm, wear limit 14 mm" },
        { item: "Rear pads, WVA 29190", oe: "A 906 420 01 00", oeAlt: "also A 004 420 69 20", am: "Brembo P 50 084 · ATE 13.0460-3837.2 · TRW GDB2076 · Textar 2919001 · Bosch 0 986 495 100", notes: "137 × 63 × 19 mm" },
        { item: "Rear wear sensors (2)", oe: "A 906 540 14 17", oeAlt: "or A 906 540 15 17 — other cable length", am: "ATE 24.8190-0424.2 · Bosch 1 987 473 037", notes: "" },
        { item: "Parking-brake shoes (drum-in-hat)", oe: "A 906 420 03 20", am: "Brembo S 50 523 · Textar 91066800 · Bosch 0 986 487 720 (with kit) · TRW fitting kit SFK396", notes: "180 × 25 mm" },
        { item: "Mercedes repair kit", oe: "front \"3,5-Tonner\" A 906 423 00 00", am: "—", notes: "discs A 906 421 00 12, pads A 906 421 16 00, sensors A 906 540 15 17", links: [
          ["front kit", "https://originalteile.mercedes-benz.de/rep.-satz-bremse-vorderachse-fuer-sprinter-906-3-5-toner/a9064230000"]] }
      ]
    }
  },

  /* ── Items common to the whole fleet ───────────────────────────────────── */
  common: [
    { item: "Front wiper blades", oe: "A 906 820 00 45 (set)", am: "Bosch Aerotwin A 215 S (3 397 007 215) · Valeo Silencio 574361 · SWF 119407", notes: "650 mm driver + 600 mm passenger, pinch-tab fitting · same on pre- and post-facelift" },
    { item: "Rear wiper (panel van with rear window)", oe: "—", am: "Bosch Aerotwin Rear A 425 H (3 397 008 051) · Valeo 578566", notes: "425 mm · B IO 1773 if a rear window wiper is fitted" },
    { item: "Starter battery", oe: "12 V, L5 case 353 × 175 × 190 mm, 95–100 Ah, ≥ 800 A · factory AGM example A 001 982 82 08 (92 Ah, 850 A)", am: "Varta Silver Dynamic AGM G14 95 Ah 850 A (595 901 085) · Bosch S5 A13 AGM · Exide EK950", notes: "under the floor mat in the driver's footwell · fit AGM again where the van has battery management (shunt on the negative pole)" },
    { item: "Second (auxiliary) battery, factory option", oe: "carrier A 906 540 47 15, engine bay left", am: "same 92–95 Ah AGM", notes: "separate from the coachbuilder's house bank in the patient compartment" },
    { item: "Wheel bolts", oe: "A 000 990 24 07", am: "Febi 29466", notes: "M14 × 1.5, ball seat, 58 mm, steel wheels · 240 Nm steel wheels (180 Nm alloys) · re-torque after 50 km" },
    { item: "Headlamp bulbs (halogen)", oe: "low beam H7 55 W · high beam H7 55 W · position W5W · indicator PY21W · fog H11 (built to 2013)", am: "Osram Night Breaker · Philips RacingVision H7", notes: "facelift fog-lamp units on 1770 and 1775 are listed with HB4 — confirm on the bulb" },
    { item: "Rear and other bulbs", oe: "brake P21W + tail R5W (facelift P21/5W) · rear indicator PY21W · reverse P21W · rear fog P21W · licence plate W5W (van) / R5W (chassis cab) · interior K18W and W5W", am: "—", notes: "coachbuilt bodies (1770–1772, 1774, 1775) use the coachbuilder's rear lamps: read the bulb in the lamp" },
    { item: "Key fob battery", oe: "2 × CR2025 (folding key to 2013) · 1 × CR2025 (facelift key)", am: "—", notes: "every 2 years" }
  ],

  /* ── Fluids ─────────────────────────────────────────────────────────────── */
  fluids: [
    { fluid: "Engine oil, OM651", applies: "1770 · 1772 · 1773 · 1774 · 1775 · ZH 651 988", engine: "OM651",
      spec: "MB 229.52 / 229.51 / 228.51 · SAE 5W-30 (0W-30 and 5W-40 also permitted by the SAE table)",
      capacity: "11.5 L with filter",
      interval: "ASSYST: max 40,000 km / 2 years (Euro 5), up to 60,000 km / 2 years (Euro VI) · fleet recommendation: every 12 months",
      product: "Mercedes 5W-30 MB 229.52 A 000 989 95 02 13 (5 L) / A 000 989 95 02 11 (1 L) · Mobil 1 ESP 5W-30 · Castrol Edge 5W-30 LL · Meguin megol Compatible 5W-30 Plus · Liqui Moly Top Tec 4200" },
    { fluid: "Engine oil, OM646", applies: "1771", engine: "OM646",
      spec: "MB 229.52 / 229.51 / 229.31 / 228.51 · 5W-30",
      capacity: "approx. 11.0 L with filter (fill to the dipstick)",
      interval: "ASSYST: max 40,000 km / 2 years · fleet recommendation: every 12 months",
      product: "same oils as above" },
    { fluid: "Coolant", applies: "all",
      spec: "MB 325.0 (blue-green, G48 type) was factory fill · MB 325.6 (pink, Si-OAT, G40 type) is the current replacement, approved for OM646/OM651 · 50 % concentrate / 50 % water",
      capacity: "approx. 10 L system",
      interval: "15 years or approx. 300,000 km · check antifreeze (−37 °C) every autumn",
      product: "Mercedes 325.0 A 000 989 08 25 10 (1.5 L), Glysantin G48 · Mercedes 325.6 A 000 989 49 11 11 (5 L), Glysantin G40" },
    { fluid: "Brake fluid", applies: "all",
      spec: "MB 331.0 (DOT 4 Plus)", capacity: "approx. 1.2 L", interval: "every 2 years",
      product: "Mercedes A 000 989 60 11 09 (1 L)" },
    { fluid: "Manual gearbox 711.6xx (Eco Gear)", applies: "vans with a manual box", gearbox: "manual",
      spec: "MB 235.10 (or 235.3) — Mercedes sheet 231.1", capacity: "1.5–2.6 L depending on 711.651 / 660 / 680 / 685",
      interval: "no scheduled change · owners report better shifting after a change at approx. 120,000 km",
      product: "Mercedes A 000 989 99 08 09 (1 L)" },
    { fluid: "Automatic 5G-Tronic 722.6 (NAG1)", applies: "automatics built before the 2013 facelift (1771, 1772, 1773, 1774, ZH 651 988 if automatic)", gearbox: "722.6",
      spec: "MB 236.14 (ATF 134; supersedes the 236.10 / 236.12 named in older manuals)",
      capacity: "approx. 7.5–8 L for a fluid-and-filter change including torque-converter drain · level set hot with the dealer dipstick",
      interval: "every 120,000 km or at the latest 10 years",
      product: "ATF A 000 989 43 04 11 · filter A 140 277 00 95 · pan gasket A 140 271 00 80 · 2 seals N 007603 010100 · Fuchs Titan ATF 4134, Shell ATF 134" },
    { fluid: "Automatic 7G-Tronic Plus 722.9", applies: "facelift automatics (1770, 1775 if automatic)", gearbox: "722.9",
      spec: "MB 236.15 when the data card shows code A89 (all 7G-Tronic Plus); otherwise 236.14",
      capacity: "9 L for the service kit · level via overflow pipe",
      interval: "every 120,000 km (first Service B, then every 80,000 mi in the US booklet)",
      product: "ATF A 000 989 44 04 11 · filter A 221 277 02 00 · pan gasket A 220 271 03 80 · Fuchs Titan ATF 7134 FE" },
    { fluid: "Rear axle 741.4xx", applies: "all — read the axle plate",
      spec: "741.421 / 422 / 423: MB 235.33 (75W-85) · other 741 types (741.412, .415, .428 …): MB 235.9 (75W-90) or 235.23 (80W-90)",
      capacity: "1.5–2.6 L by axle type", interval: "10 years or approx. 300,000 km",
      product: "Fuchs Titan Cytrac Pro 75W-85 (235.33) · Mobilube 1 SHC 75W-90, Fuchs Titan Cytrac TD (235.9)" },
    { fluid: "Power steering", applies: "all",
      spec: "MB 236.3", capacity: "approx. 1 L", interval: "none (check level at Service B)",
      product: "Mercedes A 000 989 88 03 11 (1 L) · Pentosin PSF" },
    { fluid: "Air conditioning", applies: "all with A/C (R134a on every W906)",
      spec: "R134a · PAG oil", capacity: "front A/C 800 g refrigerant / 190 mL oil · with rear or cargo A/C 1190 g",
      interval: "no Mercedes interval · a service every 2–3 years keeps the compressor oiled", product: "—" },
    { fluid: "AdBlue", applies: "1770 · 1775 (Euro VI)", adblue: true,
      spec: "ISO 22241 / DIN 70070 · MB 352.0", capacity: "18 L tank · approx. 0.2–0.35 L per 100 km",
      interval: "top up at every service and whenever the range warning appears", product: "any ISO 22241 AdBlue · tank is heated (freezes at −11 °C)" },
    { fluid: "Washer fluid", applies: "all",
      spec: "MB 371.0", capacity: "6 L reservoir", interval: "—",
      product: "Mercedes SummerFit A 000 986 20 00 / WinterFit A 000 986 94 01" }
  ],

  /* ── Mercedes genuine service kits ─────────────────────────────────────── */
  kits: [
    { kit: "Service-Kit A, OM651, ventilation with dust filter", pn: "A 906 835 15 00", contents: "oil filter A 651 180 01 09 · seal N 007603 014106 · cabin filter A 906 830 02 18", applies: "OM651 vans, every oil service", engine: "OM651", url: "https://originalteile.mercedes-benz.de/teilesatz-service-kit-a-fuer-om651-sprinter-906/a9068351500" },
    { kit: "Service-Kit A, OM651, Tempmatic", pn: "A 906 835 16 00", contents: "as above with carbon filter A 906 830 03 18", applies: "OM651 vans with Tempmatic A/C", engine: "OM651", url: "https://originalteile.mercedes-benz.de/teilesatz-service-kit-a-fuer-om651-sprinter-906/a9068351600" },
    { kit: "Service-Kit B, OM651, fuel filter with water separator, dust filter", pn: "A 906 835 11 00", contents: "oil filter · seal · air filter A 000 090 37 51 · fuel filter A 651 090 29 52 · 2 hose clamps · cabin filter A 906 830 02 18", applies: "5-pin vans with drain hose", engine: "OM651", url: "https://originalteile.mercedes-benz.de/teilesatz-service-kit-b-fuer-om651-sprinter-906/a9068351100" },
    { kit: "Service-Kit B, OM651, without water separator, dust filter", pn: "A 906 835 12 00", contents: "as above with fuel filter A 651 090 31 52", applies: "5-pin vans without drain hose", engine: "OM651", url: "https://originalteile.mercedes-benz.de/teilesatz-service-kit-b-fuer-om651-sprinter-906/a9068351200" },
    { kit: "Service-Kit B, OM651, with water separator, Tempmatic", pn: "A 906 835 13 00", contents: "with carbon cabin filter", applies: "", engine: "OM651", url: "https://originalteile.mercedes-benz.de/teilesatz-service-kit-b-fuer-om651-sprinter-906/a9068351300" },
    { kit: "Service-Kit B, OM651, without water separator, Tempmatic", pn: "A 906 835 14 00", contents: "with carbon cabin filter", applies: "", engine: "OM651", url: "https://originalteile.mercedes-benz.de/teilesatz-service-kit-b-fuer-om651-sprinter-906/a9068351400" },
    { kit: "Filter pack OM651, 5-pin without water separator", pn: "A 000 180 63 09", contents: "oil, fuel (A 651 090 31 52), air filter", applies: "", engine: "OM651", url: "https://originalteile.mercedes-benz.de/teilesatz-motorfilter-om651-sprinter-906-kraftstofffilter-ohne-wasserabscheider-stecker-5-polig/a0001806309" },
    { kit: "Filter pack OM651, with water separator", pn: "A 000 180 64 09", contents: "oil, fuel (A 651 090 29 52), air filter", applies: "", engine: "OM651", url: "https://originalteile.mercedes-benz.de/teilesatz-motorfilter-om651-sprinter-906-kraftstofffilter-mit-wasserabscheider/a0001806409" },
    { kit: "Filter pack OM646, fuel filter without heater / sensor", pn: "A 000 180 33 09", contents: "A 611 180 00 09 · A 646 092 05 01 · A 000 090 37 51", applies: "B IO 1771", engine: "OM646", url: "https://originalteile.mercedes-benz.de/originalteile/teilepakete-van/motorfilter-pakete/om646-sprinter-906/" },
    { kit: "Filter pack OM646, fuel filter with water-sensor connection", pn: "A 000 180 53 09", contents: "A 611 180 00 09 · A 642 092 01 01 · A 000 090 37 51", applies: "B IO 1771", engine: "OM646", url: "https://originalteile.mercedes-benz.de/originalteile/teilepakete-van/motorfilter-pakete/om646-sprinter-906/" },
    { kit: "Filter pack OM646 (fuel filter A 642 092 05 01)", pn: "A 000 180 54 09", contents: "described ambiguously in the shop — order by VIN", applies: "B IO 1771", engine: "OM646", url: "https://originalteile.mercedes-benz.de/originalteile/teilepakete-van/motorfilter-pakete/om646-sprinter-906/" }
  ],
  kitsNote: "No Mercedes kit covers the 3-pin fuel filter element on B IO 1773; order A 642 090 16 52 separately.",

  /* ── Intervals ──────────────────────────────────────────────────────────── */
  intervals: [
    { item: "Engine oil and filter (Service A/B, ASSYST)", mb: "by ASSYST display: about 40,000 km (Euro 5, OM646) or up to 60,000 km (Euro VI), maximum 2 years", fleet: "every 12 months — short trips and DPF regenerations put diesel into the oil", applies: "all" },
    { item: "Fuel filter", mb: "every Service B", fleet: "every 2 years, or yearly on vans that sit for weeks (water in diesel)", applies: "all" },
    { item: "Air filter", mb: "every 3rd oil change, max 4 years", fleet: "every 4 years, inspect yearly", applies: "all" },
    { item: "Cabin filter", mb: "every Service B, max 2 years", fleet: "yearly (patient compartment hygiene)", applies: "all" },
    { item: "Poly-V belt", mb: "every 4th oil change", fleet: "every 4 years with tensioner check; renew tensioner and idlers at the second belt", applies: "all" },
    { item: "Brake fluid MB 331.0", mb: "every 2 years", fleet: "2 years", applies: "all" },
    { item: "Brake pads and discs", mb: "checked at every service (twin wheels come off at Service B)", fleet: "replace when the wear-sensor lamp comes on or discs reach the limit (25 mm vented, 14 mm solid); vans that stand long develop rust lips — check discs yearly", applies: "all" },
    { item: "Coolant", mb: "15 years or approx. 300,000 km", fleet: "test antifreeze (−37 °C) every autumn", applies: "all" },
    { item: "Automatic gearbox oil and filter", mb: "722.6: every 120,000 km or 10 years · 722.9: first Service B, then every 120,000 km", fleet: "10 years at this mileage", applies: "automatics" },
    { item: "Rear-axle oil", mb: "10 years or approx. 300,000 km", fleet: "10 years", applies: "all" },
    { item: "Rear-axle U-bolts", mb: "re-tighten once at the first service", fleet: "done on all by now; re-check after any body work", applies: "906.153 chassis" },
    { item: "Particulate filter (DPF)", mb: "ash check from 160,000 km, then every service; replace only above the limit", fleet: "monthly 30-minute motorway run per van so regenerations complete", applies: "all" },
    { item: "AdBlue", mb: "check and top up at every service", fleet: "keep above a quarter tank; it degrades after about 12 months in a half-empty tank", applies: "1770 · 1775" },
    { item: "A/C system", mb: "function check only", fleet: "service (refrigerant, dryer) every 2–3 years; evaporator disinfection yearly", applies: "all with A/C" },
    { item: "Tyres", mb: "legal minimum 1.6 mm", fleet: "replace C-tyres at 3–4 mm or at 6 years from the DOT date, whichever comes first; twin wheels wear unevenly — swap inner/outer", applies: "all" },
    { item: "Starter battery", mb: "none", fleet: "AGM lasts 5–7 years; test under load every autumn, replace before the first winter failure", applies: "all" },
    { item: "House battery bank (patient compartment)", mb: "coachbuilder: none", fleet: "4 × Varta Silver Dynamic AGM G14 95 Ah (595 901 085) per van; cyclic AGM lasts 3–5 years, LiFePO4 upgrade under consideration", applies: "ambulances" },
    { item: "Auxiliary heater (Zusatzheizung, factory Webasto / Eberspächer water heater)", mb: "none", fleet: "run it 10 minutes every month, also in summer; burner / glow-pin service at a Webasto partner every 2–3 years", applies: "1770 · 1771 · 1773 · 1774 · 1775" },
    { item: "Glow plugs", mb: "none", fleet: "replace all four when one fails or when cold starts smoke; OM651 plugs seize — have them changed warm", applies: "all" },
    { item: "Wiper blades", mb: "none", fleet: "yearly", applies: "all" },
    { item: "Key fob batteries", mb: "none", fleet: "every 2 years", applies: "all" },
    { item: "First-aid kit, fire extinguisher, warning triangle", mb: "kit expiry date; extinguisher inspection every 2 years", fleet: "log the dates per van", applies: "all" }
  ],

  tyrePressures: [
    { tyre: "195/75 R16C 107/105R, twin rear, 5.5J × 16", vans: "1770 · 1772 · 1774 · 1775", front: "3.8 / 4.2 bar (1850 kg axle)", rear: "3.0 / 4.0 bar at 3200 kg axle load" },
    { tyre: "205/75 R16C 110/108R, twin rear", vans: "1771", front: "3.5 / 4.0 bar (1850 kg)", rear: "3.0 / 3.6 bar at 3200 kg" },
    { tyre: "235/65 R16C 115/113R, single rear, 6.5J × 16", vans: "1773 · ZH 651 988", front: "3.0 / 3.5 bar (1800 kg)", rear: "3.0 / 4.5 bar at 2250 kg · 3.0 / 4.9 bar at 2430 kg" }
  ],

  weakPoints: [
    { title: "OM651 timing chain", text: "Rattle for a few seconds after a cold start, typically from 150,000 km. Have the tensioner and chain checked at once; the engine is interference type. Also watch the plastic coolant flange A 651 200 60 00 and the oil-pump regulating valve.", url: "https://kfz-dietrich.com/blog/mercedes-om651-steuerkette-rasseln-kaltstart-werkstatt/" },
    { title: "OM646 injector seals (\"black death\") — B IO 1771", text: "Ticking from the engine cover and an exhaust smell in the cab. Fix early with seal A 611 017 00 60 and a new stretch bolt.", url: "https://www.sprinter.repair/black-death" },
    { title: "Euro VI AdBlue system — B IO 1770, 1775", text: "AdBlue tank heater / delivery module and NOx sensors are the usual failures. A warning here triggers a start-inhibit countdown, so do not postpone it.", url: "" },
    { title: "Standing vehicles", text: "Brake discs corrode and parking-brake shoes seize. Move each van weekly and use the parking brake only for short stops.", url: "" },
    { title: "HU dates printed on the documents", text: "B IO 1770 06/2027 · 1772 05/2026 · 1774 and 1775 07/2026. The 1771 and 1773 documents are superseded copies — check the current certificates. ZH 651 988: last MFK 31.05.2024.", url: "" }
  ],

  /* ── Ordering guide ─────────────────────────────────────────────────────── */
  checks: [
    "Fuel filter: 3-pin vs 5-pin connector, and whether a water-drain hose is fitted.",
    "Rear brakes: 303 mm vented disc with twin wheels (906.153) vs 298 mm solid disc with single wheels (1773, ZH 651 988).",
    "Front pads on the 3.5 t vans: measure the old pad — 163 mm = standard, 169 mm = heavy-duty brake option (same pad as the 4.6 t).",
    "Gearbox type plate (722.6xx, 722.9xx or manual 711.6xx) and rear-axle plate (741.4xx) before buying oil.",
    "Battery tray length (353 mm L5 is standard) and whether the van has the factory second battery.",
    "Always compare the number printed on the old part; mixed factory fitment is common on these coachbuilt vehicles."
  ],

  /* ── Sources ────────────────────────────────────────────────────────────── */
  sources: [
    { group: "Mercedes-Benz manuals", links: [
      ["Sprinter Operator's Manual 2015 (906)", "https://assets.mbvans.com/Mercedes-Benz-Vans/Manuals/2015/2015-Mercedes-Benz-Sprinter-Operators-Manual.pdf"],
      ["Operator's Manual 2012", "https://www.mbvans.com/content/dam/mb-vans/us/owner-manuals/mercedes-benz/2012-Mercedes-Benz-Sprinter-Operators-Manual.pdf"],
      ["Maintenance booklet 2014", "https://www.mbvans.com/content/dam/mb-vans/us/owner-manuals/mercedes-benz/2014-Mercedes-Benz-Sprinter-Maintenance-Manual.pdf"],
      ["Maintenance booklet 2015", "https://www.mbvans.com/content/dam/mb-vans/us/owner-manuals/mercedes-benz/2015-Mercedes-Benz-Sprinter-Maintenance-Manual.pdf"]] },
    { group: "Mercedes-Benz Betriebsstoffvorschriften (operating fluids)", links: [
      ["223.2 engine oils", "https://operatingfluids.mercedes-benz.com/api/v1/sheet/223.2"],
      ["229.52", "https://operatingfluids.mercedes-benz.com/sheet/229.52/en"],
      ["320.1 coolant overview", "https://operatingfluids.mercedes-benz.com/api/v1/categories/Frostschutz/sheets/320.1?lang=en"],
      ["325.6", "https://operatingfluids.mercedes-benz.com/sheet/325.6/en"],
      ["331.0 brake fluid", "https://operatingfluids.mercedes-benz.com/sheet/331.0/en"],
      ["231.1 gear and axle oils", "https://operatingfluids.mercedes-benz.com/api/v1/categories/Getriebe%C3%B6l/sheets/231.1?lang=en"],
      ["236.14", "https://operatingfluids.mercedes-benz.com/sheet/236.14/en"],
      ["236.15", "https://operatingfluids.mercedes-benz.com/sheet/236.15/en"],
      ["236.3", "https://operatingfluids.mercedes-benz.com/sheet/236.3/en"],
      ["235.33", "https://operatingfluids.mercedes-benz.com/sheet/235.33/en"],
      ["235.9", "https://operatingfluids.mercedes-benz.com/sheet/235.9/en"],
      ["371.0", "https://operatingfluids.mercedes-benz.com/sheet/371.0/en"]] },
    { group: "Mercedes-Benz Originalteile shop", links: [
      ["OM651 Sprinter 906 filter packs", "https://originalteile.mercedes-benz.de/originalteile/teilepakete-van/motorfilter-pakete/om651-sprinter-906/"],
      ["OM646 Sprinter 906 filter packs", "https://originalteile.mercedes-benz.de/originalteile/teilepakete-van/motorfilter-pakete/om646-sprinter-906/"],
      ["Service-Kit A list", "https://originalteile.mercedes-benz.de/originalteile/teilepakete-van/service-kit-a/sprinter-906/"],
      ["Service-Kit B list", "https://originalteile.mercedes-benz.de/originalteile/teilepakete-van/service-kit-b/sprinter-906/"],
      ["Front brake kit 5-Tonner", "https://originalteile.mercedes-benz.de/rep.-satz-bremse-vorderachse-fuer-sprinter-906-5-tonner/a9064211000"],
      ["Rear brake kit 5-Tonner", "https://originalteile.mercedes-benz.de/rep.-satz-bremse-hinterachse-fuer-sprinter-906-5-tonner/a9064230600"],
      ["Front brake kit 3,5-Tonner", "https://originalteile.mercedes-benz.de/rep.-satz-bremse-vorderachse-fuer-sprinter-906-3-5-toner/a9064230000"]] },
    { group: "MANN-FILTER catalogue", links: [
      ["HU 7010 z", "https://www.mann-filter.com/de-de/katalog/suchergebnisse/produkt.html/hu7010z_mann-filter.html"],
      ["HU 718/1 k", "https://www.mann-filter.com/de-de/katalog/suchergebnisse/produkt.html/hu718/1k_mann-filter.html"],
      ["C 4312/1", "https://www.mann-filter.com/de-de/katalog/suchergebnisse/produkt.html/c4312/1_mann-filter.html"],
      ["WK 820/16", "https://www.mann-filter.com/de-de/katalog/suchergebnisse/produkt.html/wk820/16_mann-filter.html"],
      ["WK 820/18", "https://www.mann-filter.com/de-de/katalog/suchergebnisse/produkt.html/wk820/18_mann-filter.html"],
      ["WK 842/23 x", "https://www.mann-filter.com/de-de/katalog/suchergebnisse/produkt.html/wk842/23x_mann-filter.html"],
      ["CU 3569", "https://www.mann-filter.com/de-de/katalog/suchergebnisse/produkt.html/cu3569_mann-filter.html"]] },
    { group: "Autodoc vehicle and OE cross-reference pages", links: [
      ["416 CDI 4,6-t Pritsche/Fahrgestell", "https://www.autodoc.de/ersatzteile/mercedes-benz/sprinter/sprinter-4-6-t-pritsche-fahrgestell-906/32902-416-cdi-906-153-906-155-906-253-906-255"],
      ["415 CDI", "https://www.autodoc.de/ersatzteile/mercedes-benz/sprinter/sprinter-4-6-t-pritsche-fahrgestell-906/32916-415-cdi-906-153-906-155-906-253-906-255"],
      ["316 CDI 3,5-t Kasten", "https://www.autodoc.de/ersatzteile/mercedes-benz/sprinter/sprinter-3-5-t-kasten-906/32885-316-cdi-906-631-906-633-906-635-906-637"],
      ["316 CDI 3,5-t Pritsche/Fahrgestell", "https://www.autodoc.de/ersatzteile/mercedes-benz/sprinter/sprinter-3-5-t-pritsche-fahrgestell-906/32886-316-cdi-906-131-906-133-906-135-906-231-906-233"],
      ["A6511800109", "https://www.autodoc.de/autoteile/oem/a6511800109"],
      ["A0000903751", "https://www.autodoc.de/autoteile/oem/a0000903751"],
      ["A9068300218", "https://www.autodoc.de/autoteile/oem/a9068300218"],
      ["A0011596601", "https://www.autodoc.de/autoteile/oem/a0011596601"],
      ["A9064210012", "https://www.autodoc.de/autoteile/oem/a9064210012"],
      ["A9064211600", "https://www.autodoc.de/autoteile/oem/a9064211600"],
      ["A9064230112", "https://www.autodoc.de/autoteile/oem/a9064230112"],
      ["A0064204520", "https://www.autodoc.de/autoteile/oem/a0064204520"],
      ["A9064200100", "https://www.autodoc.de/autoteile/oem/a9064200100"],
      ["A9064200420", "https://www.autodoc.de/autoteile/oem/a9064200420"],
      ["A9064200320", "https://www.autodoc.de/autoteile/oem/a9064200320"],
      ["A9065401517", "https://www.autodoc.de/autoteile/oem/a9065401517"]] },
    { group: "Brakes, A/C, capacities, owner data", links: [
      ["ATE 24.0128-0203.1", "https://www.autodoc.de/ate/957787"],
      ["ATE 24.0116-0121.1", "https://www.autodoc.de/ate/957129"],
      ["Brembo P 50 059 group", "https://www.autodoc.de/brembo/1661364"],
      ["Mahle A/C fill quantities 2021", "https://www.mahle-aftermarket.com/media/homepage/facelift/media-center/klima/thermokampagne/2021/2-2-handbuch-fuellmengen-pkw-&-nkw-210112-de-screen.pdf"],
      ["Kroon-Oil 316 CDI 2008–13", "https://www.kroon-oil.com/de/produktberatung/leichte-nutzfahrzeuge-7-5t/mercedes-benz-eu/sprinter-906/sprinter-316-cdi-906/39283/"],
      ["Kroon-Oil 316 CDI 2013–18", "https://www.kroon-oil.com/de/produktberatung/leichte-nutzfahrzeuge-7-5t/mercedes-benz-eu/sprinter-906/sprinter-316-cdi-906-xm0/40541/"],
      ["sprinter-forum: fuel-filter variants", "https://www.sprinter-forum.de/viewtopic.php?t=29417"],
      ["sprinter-forum: oil approvals", "https://www.sprinter-forum.de/viewtopic.php?t=31156"],
      ["sprinter-forum: service intervals", "https://www.sprinter-forum.de/viewtopic.php?t=11379"],
      ["sprinter-forum: axle types", "https://www.sprinter-forum.de/viewtopic.php?t=22617"],
      ["sprinter-forum: 7G-Tronic code A89", "https://www.sprinter-forum.de/viewtopic.php?t=26607"],
      ["sprinter-forum: tyre pressure table", "https://www.sprinter-forum.de/viewtopic.php?t=25067"],
      ["sprinter-forum: batteries", "https://www.sprinter-forum.de/viewtopic.php?t=25376"],
      ["Euro VI Sprinter press coverage (60,000 km interval)", "https://www.sbz-online.de/betrieb-organisation/mercedes-benz-sprinter-transporter-mit-euro-vi"]] },
    { group: "Known issues", links: [
      ["OM651 timing chain", "https://kfz-dietrich.com/blog/mercedes-om651-steuerkette-rasseln-kaltstart-werkstatt/"],
      ["OM646 black death", "https://www.sprinter.repair/black-death"],
      ["OM651 weak points", "https://planmycamper.de/ratgeber/sprinter-om651-motor-schwachstellen-wartung/"]] }
  ]
};
