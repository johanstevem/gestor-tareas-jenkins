pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo '=== BUILD ==='
                echo 'Construyendo el proyecto...'
            }
        }

        stage('Test') {
            steps {
                echo '=== TEST ==='

                bat 'if not exist index.html exit 1'
                bat 'if not exist css\\estilos.css exit 1'
                bat 'if not exist js\\app.js exit 1'

                echo 'Archivos verificados correctamente.'
            }
        }

        stage('Deploy') {
            steps {
                echo '=== DEPLOY ==='

                bat 'if not exist deploy mkdir deploy'
                bat 'copy index.html deploy\\ /Y'
                bat 'xcopy css deploy\\css\\ /E /I /Y'
                bat 'xcopy js deploy\\js\\ /E /I /Y'

                echo 'Proyecto desplegado correctamente.'
            }
        }

    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
        }

        failure {
            echo 'El pipeline ha fallado.'
        }
    }
}