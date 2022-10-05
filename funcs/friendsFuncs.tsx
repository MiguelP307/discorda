
// Filta os utilizadores de um array pelo nome inserido na searchbar
export function searchUser(users : User[], chatInput : string) {

    let newUsers : User[] = [];
    

    users.map((user) => {

        const name = user.userNickname.toLowerCase();

        if(name.match(chatInput.toLowerCase()) != null)
            newUsers.push(user);
    })

    return newUsers;
}


// Fix this and learn how to pop the user out
export function removeUser(users: User[], id : string) {

    for(let index = 0; index < users.length ; index++)
        if(users[index].userID === id) {
            users.splice(index,1);
            return users;  
        }       
        
        return users;
}