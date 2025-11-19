pipeline {
    agent any

    environment {
        IMAGE_NAME = "nodejs-app"
        CONTAINER_NAME = "nodejs-container"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/awsmarch3/docker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Remove Old Container (if running)') {
            steps {
                script {
                    sh """
                    if [ \$(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                      docker stop ${CONTAINER_NAME} || true
                      docker rm ${CONTAINER_NAME} || true
                    fi
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}:latest"
                }
            }
        }
    }
}
