pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo '=== BUILD ==='
                echo 'Construyendo proyecto...'
            }
        }

        stage('Test') {
            steps {
                echo '=== TEST ==='

                sh 'test -f index.html'
                sh 'test -f css/estilos.css'
                sh 'test -f js/app.js'

                echo 'Todos los archivos existen.'
            }
        }

        stage('Deploy') {
            steps {
                echo '=== DEPLOY ==='

                sh '''
                mkdir -p deploy
                cp index.html deploy/
                mkdir -p deploy/css
                mkdir -p deploy/js
                cp css/* deploy/css/
                cp js/* deploy/js/
                '''

                echo 'Despliegue completado.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
        }

        failure {
            echo 'Pipeline falló.'
        }
    }
}