import {createRouter,createwebHistory} from 'vue-router';
// you simply pass an object to create a router inside we will add our Routes beside the route we need 
// to add history property donwn

import Coachdetail from './pages/coaches/Coachdetail.vue';
import Coachlist from './pages/coaches/Coacheslist.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecived from './pages/requests/RequestRecived.vue';
import NotFound from './pages/NotFound.vue';

const router =createRouter({
   history :createwebHistory,// we call this function here then add your routes array 
   routes :[
       {path:'/',redirect:'/coaches'},
     {path:'/coaches',component:Coachlist},
     {path:'/coaches/:id',component:Coachdetail,children:[
         {path:'contact',component:ContactCoach}
     ]},
     {path:'/register',component:CoachRegistration},
     {path:'/requests',component:RequestRecived},
     {path:'/notFound(.*)',component:NotFound}
   ],
});

 //we want to contact a spcifc coach identify by id 
     //we can use nested route we can add children 

export default router;  // we can use in diifrent files 