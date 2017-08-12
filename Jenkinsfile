node("docker") {
    docker.withRegistry('registry.gitlab.com/mdigiacomi/wp-blogfeedui', 'VPPd2JQ8WgxBLJzEZrX8') {
    
        git url: "https://gitlab.com/mdigiacomi/wp-blogfeedui.git", credentialsId: 'VPPd2JQ8WgxBLJzEZrX8'
    
        sh "git rev-parse HEAD > .git/commit-id"
        def commit_id = readFile('.git/commit-id').trim()
        println commit_id
    
        stage "build"
        def app = docker.build "wp-blogfeedui"
    
        stage "publish"
        app.push 'master'
        app.push "${commit_id}"
    }
}