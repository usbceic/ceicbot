# File: funciones.py
#
# Description: Funciones base para el desrrollo del bot de telegram
# del Centro de Estudiantes.
#
# Autor: Informacion y Tecnologia CEIC-USB 2019
#
# Date: October - 2019

# Listener
 
def listener(messages): 
    
    for m in messages: 
        cid = m.chat.id # El Cid es el identificador del chat los negativos son grupos y positivos los usuarios 

        if cid > 0: 
            mensaje = str(m.chat.first_name) + " [" + str(cid) + "]: " + m.text # Si 'cid' es positivo, usaremos 'm.chat.first_name' para el nombre. 
        else: 
            mensaje = str(m.from_user.first_name) + "[" + str(cid) + "]: " + m.text # Si 'cid' es negativo, usaremos 'm.from_user.first_name' para el nombre. 


        f = open( 'log.txt', 'a') # Abrimos nuestro fichero log en modo 'Añadir'. 
        f.write(mensaje + "\n") # Escribimos la linea de log en el fichero. 
        f.close() # Cerramos el fichero para que se guarde. 
        
        print mensaje # Imprimimos el mensaje en la terminal, que nunca 

#### COMANDOS DISPONIBLES

# Ayuda 
def command_ayuda(m): 
    cid = m.chat.id # Guardamos el ID de la conversación para poder responder.
    bot.send_chat_action(cid, 'typing') # Enviando ...
    time.sleep(1) #La respuesta del bot tarda 1 segundo en ejecutarse
    bot.send_message( cid, AYUDA) # Con la función 'send_message()' del bot, enviamos al ID almacenado el texto que queremos.

# Info
