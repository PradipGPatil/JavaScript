
// const member={
//     teamName:'blue rocket',
//     people:['pradip','ranjeet'],
//     getTeamMember(){
//         // goal is to combine teamTitlw with people
//         this.people.forEach(p=>{
//             console.log(p+'_'+this.teamName);   
//         });
//     }
// };

// we used instead of arrow function the normal function
const member={
    teamName:'blue rocket',
    people:['pradip','ranjeet'],
    getTeamMember(){
        // goal is to combine teamTitlw with people
        this.people.forEach(function(p){
            // here this is bound to the function
            // if we try to print this it will print window object
            // here caller is forEach but in normal function like eventlistener 
            // browser bound this to whoever call this function
            // but in this case it does boudn to anything so it print windlow objects
            console.log(this    )
            console.log(p+'_'+this.teamName);   
        });
    }
};





member.getTeamMember();