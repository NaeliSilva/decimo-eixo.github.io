(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{TDBs:function(t,o,n){"use strict";n.r(o),n.d(o,"DashboardModule",(function(){return g}));var r=n("ofXK"),e=n("tyNb"),i=n("fXoL");function a(t,o){if(1&t&&(i.Rb(0,"div",11),i.Rb(1,"div",12),i.Nb(2,"i"),i.Qb(),i.Rb(3,"div",13),i.Ac(4,"Flex item"),i.Qb(),i.Qb()),2&t){const t=o.$implicit;i.zb(2),i.Cb("",t.icon," icon-item-list"),i.zb(1),i.ic("innerHTML",t.text,i.sc)}}const c=function(){return["/dashboard/login"]};let s=(()=>{class t{constructor(){this.list=[{icon:"fas fa-video",text:"agendar consultas por v\xeddeo com a nossa equipe m\xe9dica"},{icon:"fas fa-hospital",text:"conferir os <strong>servi\xe7os</strong> do nosso <strong>posto de sa\xfade</strong>"},{icon:"fas fa-newspaper",text:"acompanhar <strong>novidades e campanhas de sa\xfade</strong>"},{icon:"fas fa-user-md",text:"ver seus <strong>ver seus atendimentos e exames j\xe1 realizados</strong>"}]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-dashboard-home"]],decls:20,vars:3,consts:[[1,"container","bg-primary"],["src","/assets/imgs/onboarding.png","height","auto",1,"img"],[1,"container"],[1,"row","mt-5","mb-5"],[1,"col-8","header"],[1,"bg-warning","hr-line"],[1,"col-12"],["class","d-flex align-items-center bd-highlight mb-3 pl-2 pr-2",4,"ngFor","ngForOf"],[1,"font-weight-bold","mt-5","mb-5"],["type","button",1,"btn","btn-raised","btn-warning","btn-block","text-dark","rounded",3,"routerLink"],["type","button",1,"btn","btn-raised","btn-link","btn-block","border","border-dark","rounded"],[1,"d-flex","align-items-center","bd-highlight","mb-3","pl-2","pr-2"],[1,"pr-4","bd-highlight"],[1,"bd-highlight",3,"innerHTML"]],template:function(t,o){1&t&&(i.Rb(0,"div",0),i.Nb(1,"img",1),i.Qb(),i.Rb(2,"div",2),i.Rb(3,"div",3),i.Rb(4,"div",4),i.Ac(5," Bem-vindo ao app Estrada para Sa\xfade, caminhoneiro! "),i.Nb(6,"hr",5),i.Qb(),i.Rb(7,"div",6),i.Rb(8,"strong"),i.Ac(9,"Uma iniciativa da CCR concession\xe1rias"),i.Qb(),i.Ac(10," para trazer atendimento de sa\xfade mais pr\xf3ximo de voc\xea. "),i.Rb(11,"strong"),i.Ac(12,"Aqui voc\xea pode:"),i.Qb(),i.Qb(),i.Qb(),i.yc(13,a,5,4,"div",7),i.Rb(14,"p",8),i.Ac(15,"E tudo isso \xe9 gratuito para voc\xea."),i.Qb(),i.Rb(16,"button",9),i.Ac(17,"primeiro acesso ao app"),i.Qb(),i.Rb(18,"button",10),i.Ac(19,"ainda n\xe3o tenho cadastro"),i.Qb(),i.Qb()),2&t&&(i.zb(13),i.ic("ngForOf",o.list),i.zb(3),i.ic("routerLink",i.lc(2,c)))},directives:[r.j,e.b],styles:[".hr-line{height:6px!important;background-color:#fbc300!important}  .icon-item-list{font-size:32px!important;color:#9e260d!important}  .btn-warning{background-color:#fbc300!important;color:#000}  .btn{border-radius:10px!important;padding-top:5%;padding-bottom:5%;font-weight:700;margin-bottom:10%}  .text-ccr{color:#9e260d!important}.fill[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:50% 50%;background-size:cover;background-image:url(/assets/imgs/onboarding.png)}.container.bg-primary[_ngcontent-%COMP%]{width:100%;background-color:#006bbb;overflow:hidden}.img[_ngcontent-%COMP%]{width:100%}.header[_ngcontent-%COMP%]{color:#9e260d;font-size:24px;font-weight:700}"]}),t})();function b(t,o){1&t&&(i.Rb(0,"div"),i.Rb(1,"div",6),i.Rb(2,"div",7),i.Rb(3,"h4",8),i.Ac(4,"N\xfamero de CPF"),i.Qb(),i.Nb(5,"input",9),i.Qb(),i.Qb(),i.Rb(6,"div",10),i.Rb(7,"div",7),i.Rb(8,"h4",8),i.Ac(9,"Data de nascimento"),i.Qb(),i.Nb(10,"input",11),i.Qb(),i.Qb(),i.Rb(11,"div",10),i.Rb(12,"div",7),i.Rb(13,"h4",8),i.Ac(14,"N\xfamero de celular"),i.Qb(),i.Nb(15,"input",12),i.Qb(),i.Qb(),i.Qb())}function d(t,o){1&t&&(i.Rb(0,"div"),i.Rb(1,"div",6),i.Rb(2,"div",7),i.Rb(3,"h4",8),i.Ac(4,"Digite uma senha"),i.Qb(),i.Nb(5,"input",13),i.Qb(),i.Qb(),i.Rb(6,"div",10),i.Rb(7,"div",7),i.Rb(8,"h4",8),i.Ac(9,"Confirme a sua senha"),i.Qb(),i.Nb(10,"input",14),i.Qb(),i.Qb(),i.Qb())}let p=(()=>{class t{constructor(t){this.router=t,this.formType="data",this.render={data:{img:"/assets/imgs/logo-grupo-ccr.png",title:"Coloque suas informa\xe7\xf5es pessoais para acessar seu perfil",btn:"confirmar informa\xe7\xf5es"},password:{img:null,title:"Para manter sua conta segura, crie uma senha de 4 n\xfameros",btn:"acessar"}}}ngOnInit(){this.defineBody()}defineBody(){this.body=this.render[this.formType]}isFormTypeData(){return"data"===this.formType}submit(){const{formType:t}=this;"data"==t?(this.formType="password",this.defineBody()):"password"==t&&this.router.navigate(["/dashboard/welcome"])}}return t.\u0275fac=function(o){return new(o||t)(i.Mb(e.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-dashboard-login"]],decls:10,vars:5,consts:[[1,"container"],[1,"mx-auto","d-block","mt-5",3,"src"],[1,"row","mt-5","mb-5"],[1,"col-8","header"],[4,"ngIf"],["type","button",1,"btn","btn-raised","btn-warning","btn-block","text-dark","rounded","mt-5",3,"click"],[1,"col-12","mt-5"],[1,"form-group"],[1,"text-ccr"],["type","text","id","cpf","value","123.456.789-00",1,"form-control"],[1,"col-12","mt-2"],["type","text","id","born","value","19/06/1975",1,"form-control"],["type","text","id","phone","value","(11) 98199-0011",1,"form-control"],["type","password","id","password","value","loremispum",1,"form-control"],["type","password","id","password_confirmed","value","loremispum",1,"form-control"]],template:function(t,o){1&t&&(i.Rb(0,"div",0),i.Nb(1,"img",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.Rb(4,"h2"),i.Ac(5),i.Qb(),i.Qb(),i.yc(6,b,16,0,"div",4),i.yc(7,d,11,0,"div",4),i.Qb(),i.Rb(8,"button",5),i.dc("click",(function(){return o.submit()})),i.Ac(9),i.Qb(),i.Qb()),2&t&&(i.zb(1),i.ic("src",o.body.img,i.tc),i.zb(4),i.Bc(o.body.title),i.zb(1),i.ic("ngIf",o.isFormTypeData()),i.zb(1),i.ic("ngIf",!o.isFormTypeData()),i.zb(2),i.Bc(o.body.btn))},directives:[r.k],styles:[".hr-line{height:6px!important;background-color:#fbc300!important}  .icon-item-list{font-size:32px!important;color:#9e260d!important}  .btn-warning{background-color:#fbc300!important;color:#000}  .btn{border-radius:10px!important;padding-top:5%;padding-bottom:5%;font-weight:700;margin-bottom:10%}  .text-ccr{color:#9e260d!important}"]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-dashboard-welcome"]],decls:1,vars:0,template:function(t,o){1&t&&i.Ac(0,"welcome")},styles:[".hr-line{height:6px!important;background-color:#fbc300!important}  .icon-item-list{font-size:32px!important;color:#9e260d!important}  .btn-warning{background-color:#fbc300!important;color:#000}  .btn{border-radius:10px!important;padding-top:5%;padding-bottom:5%;font-weight:700;margin-bottom:10%}  .text-ccr{color:#9e260d!important}"]}),t})();const l=[{path:"home",component:s},{path:"login",component:p},{path:"welcome",component:m},{path:"",redirectTo:"home",pathMatch:"full"}];let u=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(o){return new(o||t)},imports:[[e.c.forChild(l)],e.c]}),t})(),g=(()=>{class t{}return t.\u0275mod=i.Kb({type:t,bootstrap:[s,p,m]}),t.\u0275inj=i.Jb({factory:function(o){return new(o||t)},providers:[],imports:[[r.b,u]]}),t})()}}]);