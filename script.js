fetch("https://data.covid19india.org/v4/min/data.min.json")
.then((response)=>response.json())
.then((data)=>{
    var row=document.getElementsByClassName("row")[0];
    for(var i in data)
    {
    console.log(i,data[i].total.confirmed);
    let records=data[i].meta.tested.source;
    console.log(records);
    let column=document.createElement("div");
    column.setAttribute("class","col-4");
    let card=document.createElement("div");
    card.setAttribute("class","card");
    let heading=document.createElement("h5");
    heading.innerText=`${i}`
    let paragraph=document.createElement("p")
    paragraph.innerText=`Confirmed cases:${data[i].total.confirmed}
    Recovered cases:${data[i].total.recovered}`;
    let button = document.createElement("button")
    button.setAttribute("class","btn-primary");
    
    button.textContent=`Total Records: `;
    button.addEventListener("click",function(){
        window.open(`${records}`);
    })
    card.append(heading,paragraph);
    card.append(button);
    column.appendChild(card);
    row.appendChild(column);
}
    

   });