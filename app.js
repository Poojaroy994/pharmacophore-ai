const drugs = [
 {name:"Metformin",class:"Biguanide antidiabetic",uses:["Type 2 diabetes mellitus"],effects:["Nausea","Diarrhea","Abdominal discomfort"],serious:["Lactic acidosis — rare"],atc:"A10BA02"},
 {name:"Lisinopril",class:"ACE inhibitor",uses:["Hypertension","Heart failure"],effects:["Cough","Dizziness","Hyperkalemia"],serious:["Angioedema"],atc:"C09AA03"},
 {name:"Amlodipine",class:"Calcium-channel blocker",uses:["Hypertension","Angina"],effects:["Peripheral edema","Headache","Flushing"],serious:["Severe hypotension — uncommon"],atc:"C08CA01"},
 {name:"Atorvastatin",class:"HMG-CoA reductase inhibitor",uses:["Hypercholesterolemia","Cardiovascular risk reduction"],effects:["Muscle pain","Headache","GI symptoms"],serious:["Myopathy/rhabdomyolysis — rare"],atc:"C10AA05"},
 {name:"Amoxicillin",class:"Penicillin antibacterial",uses:["Susceptible bacterial infections"],effects:["Nausea","Diarrhea","Rash"],serious:["Anaphylaxis","Severe cutaneous reactions — rare"],atc:"J01CA04"},
 {name:"Losartan",class:"Angiotensin II receptor blocker",uses:["Hypertension","Diabetic kidney disease"],effects:["Dizziness","Hyperkalemia"],serious:["Angioedema — uncommon"],atc:"C09CA01"},
 {name:"Omeprazole",class:"Proton-pump inhibitor",uses:["GERD","Peptic ulcer disease"],effects:["Headache","Abdominal pain","Diarrhea"],serious:["C. difficile-associated diarrhea; hypomagnesemia with prolonged use"],atc:"A02BC01"},
 {name:"Levothyroxine",class:"Thyroid hormone",uses:["Hypothyroidism"],effects:["Palpitations if over-replaced","Tremor","Insomnia"],serious:["Arrhythmias from excessive dosing"],atc:"H03AA01"},
 {name:"Insulin glargine",class:"Long-acting insulin",uses:["Diabetes mellitus"],effects:["Hypoglycemia","Injection-site reactions"],serious:["Severe hypoglycemia"],atc:"A10AE04"}
];

function render(list){
 const box=document.getElementById("results");
 document.getElementById("resultCount").textContent=`${list.length} example records`;
 box.innerHTML=list.map(d=>`<article class="drug">
   <h3>${d.name}</h3><div class="class">${d.class} · ATC ${d.atc}</div>
   <h4>Uses</h4><p>${d.uses.map(x=>`<span class="tag">${x}</span>`).join("")}</p>
   <h4>Common adverse effects</h4><p>${d.effects.join(" · ")}</p>
   <h4>Important / serious effects</h4><p>${d.serious.join(" · ")}</p>
 </article>`).join("");
}
function searchDrugs(){
 const q=document.getElementById("drugSearch").value.trim().toLowerCase();
 const list=q?drugs.filter(d=>(d.name+" "+d.class+" "+d.uses.join(" ")+" "+d.effects.join(" ")).toLowerCase().includes(q)):drugs;
 render(list);
 document.getElementById("drugs").scrollIntoView({behavior:"smooth"});
}
function quickSearch(q){document.getElementById("drugSearch").value=q;searchDrugs();}
document.getElementById("drugSearch").addEventListener("keydown",e=>{if(e.key==="Enter")searchDrugs()});
render(drugs);