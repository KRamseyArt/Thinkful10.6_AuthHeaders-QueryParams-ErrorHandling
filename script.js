function getRepos(){
    $('#searchRepos').submit(e => {
        e.preventDefault();
        
        let username = e.target.username.value;
        console.log(username);

        fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(responseJSON => displayData(responseJSON));
    });
}

function displayData(arr){
    console.log(arr);
    $('#results').empty();
    arr.map(key => {
        $('#results').append(`
        <li>
            <h3>${key.name}</h3>
            <a href="${key.html_url}" target="_blank">REPO</a>
        </li>
    `);
    $('.hidden').removeClass('hidden');
    })
    
    
}

$(getRepos);