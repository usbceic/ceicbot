# File: bot.py
#
# Description: Archivo base para el desrrollo de un bot de telegram
# del Centro de Estudiantes, ideado para realizar tareas como recibir
# consultas sobre prodcutos del cuartico, enviar mensajes al ceic,etc...
#
# Autor: Informacion y Tecnologia CEIC-USB 2019
#
# Date: October - 2019

###################### IMPORTS ##########################

# Externas 
import telebot 
from telebot import types  
import time 

# Internas
from funciones import *
 
###################### VARIABLES ########################## 
 
TOKEN =  'Valor reservado para produccion'
 
AYUDA = 'Puedes utilizar los siguientes comandos : \n\n/ayuda - Guia para utilizar el bot. \n/info - Informacion De interes \n/hola - Informacion sobre USBCEIC \n\n'
 
GRUPO = -XXXXXX 

bot = telebot.TeleBot(TOKEN) # Creamos el objeto de nuestro bot.

@bot.message_handler(commands=['ayuda'])
@bot.message_handler(commands=['info']) # Indicamos que lo siguiente va a controlar el comando '/info'
 
 
bot.set_update_listener(listener) # Así, le decimos al bot que utilice como función escuchadora nuestra función 'listener' declarada arriba.

bot.polling(none_stop=True)