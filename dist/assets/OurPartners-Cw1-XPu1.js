import{a as d,u as c,r as m,f as p,j as e,N as x}from"./index-DnwIy10p.js";import{P as u}from"./PageTitle-BrCnUMak.js";import{b as o}from"./blur-DRXbtuyR.js";const b=()=>{const t=d(),{partners:i,status:s,error:f}=c(r=>r.data);return m.useEffect(()=>{s==="idle"&&t(p())},[s,t]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute text-[27.2px] sm:text-[48px] top-0 md md:top-10 start-1/2 -translate-x-1/2 ",children:e.jsx(u,{title:"Our Parteners"})}),e.jsx(o.LazyLoadImage,{src:"/ourParteners images/ourPartenr-header.png",alt:"partner image",effect:"blur"})]}),e.jsx("div",{className:"partners py-32 overflow-hiddens container",children:i.map((r,n)=>e.jsxs("div",{className:"category",children:[e.jsx("h3",{className:"text-[48px] mt-10 underline underline-offset-8 decoration-2 border-primary font-bold text-primary",children:r.categoryName||"Category Name"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:r.partners.map((a,l)=>e.jsxs("div",{className:"partner flex items-center content-center overflow-hidden border-primary border-2 rounded-md relative",children:[e.jsx("div",{className:"absolute top-0 start-0 end-0 bottom-0 z-10 opacity-0 hover:opacity-100 transition-all duration-500 bg-primary-400",children:e.jsx(x,{to:`/partners/${a.name}`,children:e.jsx("button",{className:"absolute top-1/2 start-1/2 main-btn -translate-y-1/2 -translate-x-1/2",children:"Details"})})}),e.jsx(o.LazyLoadImage,{src:a.logo,alt:a.name,effect:"blur"})]},l))})]},n))})]})};export{b as default};
