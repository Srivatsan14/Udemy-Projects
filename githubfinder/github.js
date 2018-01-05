class Github{
    constructor(){
        this.client_id="c5d9979a77a11886b6b2";
        this.client_secret='258a36db2e8f201f55c8e0b94edfc5c931bfa84a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }

    }
}