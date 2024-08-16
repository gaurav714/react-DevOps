pipeline {
    agent any
    tools {
        nodejs 'nodejs' // Replace with your desired Node.js version
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/gaurav714/react-DevOps.git', branch: 'master'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }
    post {
        always {
            cleanupWorkspace()
        }
    }
}