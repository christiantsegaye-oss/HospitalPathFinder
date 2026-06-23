// --- Part 1: Priority Queue ---
class PriorityQueue {
    constructor() { this.values = []; }
    enqueue(node, priority) {
        this.values.push({ node, priority });
        this.values.sort((a, b) => a.priority - b.priority);
    }
    dequeue() { return this.values.shift(); }
    isEmpty() { return this.values.length === 0; }
}

// --- Part 2: Dijkstra's Algorithm ---
function findShortestPath(startNode, endNode) {
    const distances = {}; const prev = {}; const pq = new PriorityQueue(); let path = [];
    for (let node in hospitalGraph) {
        distances[node] = (node === startNode) ? 0 : Infinity;
        prev[node] = null;
        if (node === startNode) pq.enqueue(node, 0);
    }
    while (!pq.isEmpty()) {
        let smallest = pq.dequeue().node;
        if (smallest === endNode) { while (prev[smallest]) { path.push(smallest); smallest = prev[smallest]; } break; }
        for (let neighbor in hospitalGraph[smallest]) {
            let alt = distances[smallest] + hospitalGraph[smallest][neighbor];
            if (alt < distances[neighbor]) { distances[neighbor] = alt; prev[neighbor] = smallest; pq.enqueue(neighbor, alt); }
        }
    }
    return { path: path.concat(startNode).reverse(), distance: distances[endNode] };
}

// --- Part 3: AMHARIC TRANSLATION DICTIONARY (Full Version) ---
const translations = {
    "am": {
        "title": "🏥 የሆስፒታል አቅጣጫ አመልካች",
        "current_loc": "📍 አሁን ያሉበት ቦታ:",
        "destination": "መድረሻ:",
        "get_dir": "አቅጣጫዎችን አግኝ",
        "emergency_btn": "🚨 አስቸኳይ አደጋ፡ የቅርብ ሆስፒታል ፈልግ",
        "route_title": "ምርጥ አቅጣጫ:",
        "placeholder": "📍 ያሉበትን ቦታ ይምረጡ...",
        "total": "ጠቅላላ ርቀት:",
        // Floor and General Names
        "Underground": "ከርሰ ምድር",
        "Ground Floor": "ምድር ቤት",
        "1st Floor": "1ኛ ፎቅ",
        "2nd Floor": "2ኛ ፎቅ",
        "3rd Floor": "3ኛ ፎቅ",
        "4th Floor": "4ኛ ፎቅ",
        "5th Floor": "5ኛ ፎቅ",
        "Elevator": "ሊፍት",
        // City Level
        "Main Entrance": "ዋና መግቢያ",
        "North Hospital": "ሰሜን ሆስፒታል",
        "South Hospital": "ደቡብ ሆስፒታል",
        "East Hospital": "ምስራቅ ሆስፒታል",
        "West Hospital": "ምዕራብ ሆስፒታል",
        "North East Hospital": "ሰሜን ምስራቅ ሆስፒታል",
        "South East Hospital": "ደቡብ ምስራቅ ሆስፒታል",
        "South West Hospital": "ደቡብ ምዕራብ ሆስፒታል",
        "North West Hospital": "ሰሜን ምዕራብ ሆስፒታል",
        "Downtown Area": "መሀል ከተማ",
        "Uptown District": "አፕታውን ዲስትሪክት",
        "Industrial Park": "የኢንዱስትሪ ፓርክ",
        "Residential Area": "የመኖሪያ አካባቢ",
        // Internal - Underground
        "Parking Central Hub": "ማዕከላዊ የመኪና ማቆሚያ",
        "Ambulance Bay": "የአምቡላንስ ማቆሚያ",
        "Generator Room": "የጄኔሬተር ክፍል",
        "Maintenance Workshop": "የጥገና አውደ ጥናት",
        "Parking South Zone": "ደቡብ የመኪና ማቆሚያ ዞን",
        "Car Entrance South East": "ደቡብ ምስራቅ የመኪና መግቢያ",
        "Car Entrance South West": "ደቡብ ምዕራብ የመኪና መግቢያ",
        "Parking East Zone": "ምስራቅ የመኪና ማቆሚያ ዞን",
        "Parking West Zone": "ምዕራብ የመኪና ማቆሚያ ዞን",
        // Internal - Ground
        "Main Reception Desk": "ዋና የመቀበያ ጠረጴዛ",
        "Emergency Room Triage": "የአደጋ ጊዜ ታካሚዎች መለያ ክፍል",
        "Emergency Entrance": "የአደጋ ጊዜ መግቢያ",
        "Pharmacy": "መድኃኒት ቤት",
        "Cafeteria": "ካፌቴሪያ",
        "Gift Shop": "የጥቅማጥቅም መሸጫ ሱቅ",
        // Internal - 1st Floor
        "Laboratory Waiting Area": "የላብራቶሪ መጠበቂያ ቦታ",
        "Radiology Department": "የራጅ/ራዲዮሎጂ ክፍል",
        "Pathology Laboratory": "የፓቶሎጂ ላብራቶሪ",
        "Blood Bank": "የደም ባንክ",
        "Dialysis Center": "የዲያሊሲስ ማዕከል",
        // Internal - 2nd Floor
        "Doctors Lobby": "የሐኪሞች መቀበያ",
        "Cardiology Wing": "የልብ ሕክምና ክፍል",
        "Neurology Wing": "የነርቭ ሕክምና ክፍል",
        "Oncology Department": "የካንሰር ሕክምና ክፍል",
        "Orthopedics Clinic": "የአጥንት ሕክምና ክሊኒክ",
        // Internal - 3rd Floor
        "Sterile Hallway": "ንፁህ ኮሪደር",
        "Operating Theater 1": "የቀዶ ጥገና ክፍል 1",
        "Operating Theater 2": "የቀዶ ጥገና ክፍል 2",
        "Recovery Ward": "የማገገሚያ ክፍል",
        "Pre Surgery Preparation Room": "ከቀዶ ጥገና በፊት ዝግጅት ክፍል",
        // Internal - 4th Floor
        "Central Nursing Station": "ማዕከላዊ የነርሶች ጣቢያ",
        "Pediatric Ward": "የሕፃናት ሕክምና ክፍል",
        "Maternity Ward": "የወሊድ ክፍል",
        "General Ward A": "አጠቃላይ የሕሙማን ክፍል ሀ",
        "General_Ward_B": "አጠቃላይ የሕሙማን ክፍል ለ",
        // Internal - 5th Floor
        "Security Hub": "የጥበቃ ማዕከል",
        "Intensive Care Unit": "ፅኑ ሕሙማን መከታተያ (ICU)",
        "Neonatal Intensive Care Unit": "የጨቅላ ሕፃናት ፅኑ ሕሙማን መከታተያ (NICU)",
        "Private VIP Suite": "ልዩ የቪአይፒ ክፍል",
        "Administration Boardroom": "የአስተዳደር የመሰብሰቢያ አዳራሽ"
    }
};

let currentLang = "en";

function translate(name) {
    let clean = name.replace(/_/g, ' ');
    if (currentLang === "am" && translations.am[clean]) return translations.am[clean];
    // Special handle for elevators like "Elevator 1 Ground Floor"
    if (currentLang === "am" && clean.includes("Elevator")) {
        let parts = clean.split(" ");
        let elevNum = parts[1];
        let floorPart = parts.slice(2).join(" ");
        let translatedFloor = translations.am[floorPart] || floorPart;
        return `ሊፍት ${elevNum} (${translatedFloor})`;
    }
    return clean;
}

function generateDetailedInstructions(path) {
    let html = "<ol style='padding-left: 20px; line-height: 1.8;'>";
    for (let i = 0; i < path.length - 1; i++) {
        let current = path[i], next = path[i+1], dist = hospitalGraph[current][next];
        let from = translate(current), to = translate(next);

        if (current.includes("Elevator") && next.includes("Elevator") && current.substring(0,10) === next.substring(0,10)) {
            let cleanNext = next.replace(/_/g, ' ');
            let destFloor = translate(cleanNext.split(" ").slice(2).join(" "));
            let elevName = translate(current.split("_").slice(0,2).join("_"));
            html += (currentLang === "am") 
                ? `<li>በ<b>${elevName}</b> ወደ <b>${destFloor}</b> ይሂዱ</li>`
                : `<li>Take <b>${elevName}</b> to the <b>${destFloor}</b></li>`;
        } else {
            html += (currentLang === "am")
                ? `<li>ከ${from} ተነስተው <b>${dist}ሜ</b> ወደ <b>${to}</b> ይራመዱ</li>`
                : `<li>From ${from}, walk <b>${dist}m</b> to reach the <b>${to}</b></li>`;
        }
    }
    return html + "</ol>";
}

function formatDistance(m) {
    if (m >= 1000) return (m/1000).toFixed(1) + (currentLang === "am" ? " ኪ.ሜ" : " km");
    return m + (currentLang === "am" ? " ሜትር" : " meters");
}

// --- UI Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const startSelect = document.getElementById("startNode");
    const endSelect = document.getElementById("endNode");
    const langSelect = document.getElementById("languageSelect");
    const findBtn = document.getElementById("findBtn");
    const emergencyBtn = document.getElementById("emergencyBtn");
    const outputCard = document.getElementById("output-card");

    function updateUI() {
        document.getElementById("mainTitle").innerText = currentLang === "am" ? translations.am.title : "🏥 Hospital Pathfinder";
        document.getElementById("startLabel").innerText = currentLang === "am" ? translations.am.current_loc : "📍 My Current Location:";
        document.getElementById("endLabel").innerText = currentLang === "am" ? translations.am.destination : "Destination:";
        document.getElementById("routeTitle").innerText = currentLang === "am" ? translations.am.route_title : "Best Route:";
        findBtn.innerText = currentLang === "am" ? translations.am.get_dir : "Get Directions";
        emergencyBtn.innerText = currentLang === "am" ? translations.am.emergency_btn : "🚨 EMERGENCY: Find Nearest Hospital";

        let s = startSelect.value, e = endSelect.value;
        startSelect.innerHTML = ""; endSelect.innerHTML = "";
        startSelect.add(new Option(currentLang === "am" ? translations.am.placeholder : "📍 Select location...", ""));
        Object.keys(hospitalGraph).sort().forEach(room => {
            startSelect.add(new Option(translate(room), room));
            endSelect.add(new Option(translate(room), room));
        });
        startSelect.value = s; endSelect.value = e;
    }

    langSelect.addEventListener("change", (e) => { currentLang = e.target.value; updateUI(); outputCard.classList.add("hidden"); });

    findBtn.addEventListener("click", () => {
        if (!startSelect.value || !endSelect.value) return alert(currentLang === "am" ? "እባክዎ ቦታዎችን ይምረጡ!" : "Please select both locations!");
        const res = findShortestPath(startSelect.value, endSelect.value);
        outputCard.classList.remove("hidden");
        document.getElementById("path-result").innerHTML = generateDetailedInstructions(res.path);
        document.getElementById("distance-result").innerText = (currentLang === "am" ? "ጠቅላላ ርቀት: " : "Total Distance: ") + formatDistance(res.distance);
    });

    emergencyBtn.addEventListener("click", () => {
        const hosp = ["Main_Entrance", "North_Hospital", "North_East_Hospital", "East_Hospital", "South_East_Hospital", "South_Hospital", "South_West_Hospital", "West_Hospital", "North_West_Hospital"];
        let min = Infinity, best = null, name = "";
        hosp.forEach(h => {
            if (startSelect.value === h) return;
            let r = findShortestPath(startSelect.value, h);
            if (r.distance < min) { min = r.distance; best = r; name = h; }
        });
        if (best) {
            outputCard.classList.remove("hidden");
            document.getElementById("path-result").innerHTML = (currentLang === "am" ? `<b style='color:#e74c3c'>🚨 አስቸኳይ አደጋ፡ ወደ ${translate(name)} በመሄድ ላይ</b><br>` : "") + generateDetailedInstructions(best.path);
            document.getElementById("distance-result").innerText = (currentLang === "am" ? "ጠቅላላ ርቀት: " : "Total Distance: ") + formatDistance(min);
        }
    });

    updateUI();
});