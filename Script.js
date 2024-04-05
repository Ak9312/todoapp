bt = document.querySelector("#Button");
ib = document.querySelector("#inputBox");
oc = document.querySelector("#outputContainer");
let i = 0;
bt.addEventListener("click", () => {
  const nu = document.createElement("div");
  const nu2 = document.createElement("div");
  //Edit
  const ed = document.createElement("button");
  ed.textContent = "Edit Task";

  //Delete
  const dl = document.createElement("button");

  //Close Button
  const cl = document.createElement("button");

  dl.textContent = "Delete Task";

  oc.appendChild(nu);
  nu.appendChild(nu2);
  nu.classList.add("pbtt");

  nu2.classList.add("btt");

  oc.style.border = "solid #000000";
  i++;

  nu2.textContent = i + "." + " " + ib.value;

  // nu.textContent =  "sdfsdfsdfsdf";
  nu2.appendChild(ed);
  nu2.appendChild(dl);
  ed.addEventListener("click", () => {
    document.querySelector(".ed").style.display = "block";

    oc.appendChild(cl);
    cl.textContent = "Close Box"
    document.querySelector(".ed").textContent = "Edit Task";
  });
  dl.addEventListener("click", () => {
    document.querySelector(".delete").style.display = "block";
    document.querySelector(".delete").textContent = "Delete Task";
    oc.appendChild(cl);
    cl.textContent = "Close Box"
  });
 

     if (cl.style.display != "none"|| document.querySelector(".delete").style.display != "none" ||document.querySelector(".ed").style.display != "none") {
      cl.addEventListener("click", ()=> { cl.style.display = "none";
               document.querySelector(".delete").style.display = "none";  
               document.querySelector(".ed").style.display = "none";
         })
     }

  ib.value = "";
});

// dl.classList.add("btt");
