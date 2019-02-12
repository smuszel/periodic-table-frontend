module.exports = repo => ({
    stars: repo.stargazers_count,
    size: repo.size,
    forks: repo.forks_count,
    open_issues: repo.open_issues,
});
