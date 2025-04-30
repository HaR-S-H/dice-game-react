node {
    stage('Checkout') {
        'gitclone https://github.com/HaR-S-H/dice-game-react.git'
    }

    stage('Build') {
        sh 'npm install'
    }


    stage('Deploy') {
        sshPublisher(publishers: [
            sshPublisherDesc(
                configName: 'server',
                transfers: [
                    sshTransfer(
                        sourceFiles: 'dist/**',
                        removePrefix: 'dist',
                        remoteDirectory: '/var/www/app'
                    )
                ],
                execCommand: 'pm2 restart app'
            )
        ])
    }
}
