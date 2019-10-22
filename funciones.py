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
def command_info(m): # Definimos una función que resuleva lo que necesitemos.
    cid = m.chat.id # Guardamos el ID de la conversación para poder responder.

    if cid == GRUPO:
        bot.send_message( GRUPO, 'mensaje A') # Con la función 'send_message()' del bot, enviamos al ID almacenado el texto que queremos.
 
    else :
        bot.send_message( cid, 'mensaje B')

# Saldo
def command_saldo(m):
    cid = m.chat.id # Guardamos el ID de la conversación para poder responder.
    time.sleep(1)
    bot.send_message(m.chat.id, "Esta funcion estara disponible en el siguiente release")


### MENSAJES INLINE
def command_text_hola(m):
    time.sleep(1)
    bot.send_message(m.chat.id, "Hola a ti tambien")
    
def command_text_Que_es_esto(m):
    time.sleep(1)
    bot.send_message(m.chat.id, "Es uno de los nuevos metodos de comunicacion del USBCEIC")

def command_text_Como_lo_uso(m):
    time.sleep(1)
    bot.send_message(m.chat.id, "EScribe el comando /ayuda para ver las opciones disponibles y de que se trata el bot")

def command_text_Esto_es_una_beta(m):
    time.sleep(1)
    bot.send_message(m.chat.id, "Si, efectivamente, es una beta que estara disponible hasta el siguiente release")