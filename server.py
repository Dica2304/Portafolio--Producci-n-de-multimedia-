from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuración de correo
SENDER_EMAIL = "dianabonilla2304@gmail.com"  # Correo del usuario
SENDER_PASSWORD = "expm jmwc vmpp dgsu"  # Contraseña de aplicación del usuario
RECIPIENT_EMAIL = "dianabonilla2304@gmail.com"
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

@app.route('/api/contact', methods=['POST'])
def send_contact_email():
    try:
        data = request.json
        
        # Validar datos
        nombre = data.get('nombre', '').strip()
        email = data.get('email', '').strip()
        codigo_proyecto = data.get('codigo_proyecto', '').strip()
        mensaje = data.get('mensaje', '').strip()
        
        if not all([nombre, email, mensaje]):
            return jsonify({'error': 'Por favor completa todos los campos requeridos'}), 400
        
        # Crear el mensaje
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"Nuevo mensaje de contacto de {nombre}"
        
        # Cuerpo del email
        body = f"""
Nuevo mensaje de contacto desde tu sitio web:

Nombre: {nombre}
Email: {email}
Código de Proyecto: {codigo_proyecto if codigo_proyecto else 'No especificado'}

Mensaje:
{mensaje}

---
Este es un mensaje automático enviado desde tu formulario de contacto.
Responde directamente a: {email}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Enviar el correo
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        return jsonify({'success': True, 'message': '¡Mensaje enviado correctamente!'}), 200
    
    except Exception as e:
        print(f"Error al enviar correo: {str(e)}")
        return jsonify({'error': f'Error al enviar el mensaje: {str(e)}'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
