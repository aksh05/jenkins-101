pipeline {
    agent { 
        node {
            label 'docker-agent-python'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo "Building....."
                sh '''
                cd myapp
                npm run build
                slackSend color: 'success', message: 'Build completed successfully', channel: "jenkins-test"
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                cd myapp
                node index.js
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy....'
                sh '''
                echo "Triggered Deployment .."
                '''
            }
        }
    }
}
