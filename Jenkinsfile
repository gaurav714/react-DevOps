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
           emailext(
                to: 'gauravnautiyal77@gmail.com ',
                subject: 'Build ${BUILD_STATUS} - ${JOB_NAME}',
                body: 'Build has finished: ${BUILD_STATUS}\nCheck console output at ${BUILD_URL}'
            )
            deleteDir()
        }
    }
}