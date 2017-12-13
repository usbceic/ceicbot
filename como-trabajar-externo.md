# Como trabajar

## Si es tu primera vez:

Desde la interfaz de github, haz un fork al [repo principal](https://github.com/usbceic/ceicbot.git).
Luego, clona el repo de TU cuenta y añade el repo principal a tu upstream:

```bash
# Si usas https
$ git remote add upstream https://github.com/usbceic/ceicbot.git
# Si usas SSH
$ git remote add upstream git@github.com:usbceic/ceicbot.git
```

## Cuando empieza el dia

```bash
$ git checkout master
$ git fetch upstream
$ git rebase upstream/master
$ npm install
$ git checkout tu-rama

# El siguiente comando puede que genere conflictos
# Toca arreglarlos a mano (git te dice donde)
$ git rebase master
```

### Explicacion de cada comando

1. `git checkout master`: Nos mueve a la rama principal, `master`.
2. `git fetch upstream`: Le decimos a git que traiga todos los cambios del
	repo principal **PERO** que no los aplique sobre nuestro repo local.
3. `git rebase upstream/master`: Esto es como un merge, pero mas limpio. Lo que
	hace `git rebase <branch-name>` es que aplica los cambios mas recientes _por encima_ de
	`<branch-name>`. Esto actualizaria tu `master` con los cambios mas recientes.
4. `npm install`: Si alguien actualizo el package.json, i.e añadio mas dependencias,
esto nos las instalara automaticamente.
5. `git checkout tu-rama`: Cambias a tu rama de trabajo.
6. `git rebase master`: Aplica los cambios mas actuales sobre tu rama de trabajo. git
	intentara siempre aplicarlos sin destruir tus cambios, sin embargo, pueden haber
	conflictos, en tal caso tienes que arreglarlos a mano.

## Mientras trabajas

**SIEMPRE** trabajen sobre un branch distinto al `master`. Es decir, entrando
en algo de contexto, si quiero desarrollar el header de la pagina haria algo asi:

```bash
# Si no he creado el branch
$ git branch header-dev

# Cambiamos al branch
$ git checkout header-dev

# Commiteamos blablabla...
```

La razon principal de no trabajar sobre el `master` es por que ese es el codigo
principal, el que tiene todos los cambios. Ademas, lo bueno de trabajar con branches
es que si no te gusta lo que estabas codeando o sencillamente ya no es util, pues
puedes eliminar el branch sin danar el codigo principal, cosa que no podria
suceder si hubieras commiteado directamente sobre el master.

## Cuando quieres subir cambios

Lo bueno de agregarlos a colaboradores, es que todos tienen permisos de escritura
sobre el remoto principal. Sin embargo, hay que seguir unas reglas para que no
se nos complique la vida.

```bash
# ...
# Commitee todos los cambios de mi codigo
# Cerciorarse de tener el __working directory__ limpio.

# Aqui repetimos TODO lo de "Cuando empieza el dia". Esto es para evitar
# conflictos
$ git push -u origin tu-rama
```

Luego, en su fork buscan su rama y le dan a pull request. Luego esperan a que
se decida aceptar o hacer cambios antes de hacer el merge.

Cuando se abre un pull request (de ahora en adelante, PR), en la interfaz de github
les aparecera una notificacion en la pestana _Pull Requests_. Ahi veremos TODAS
las PR de nuestro proyecto y en cada una se puede hacer click para ver los
commits y los comentarios de nosotros. Cuando se decida que el PR es correcto
y que se debe mergear, me dicen y la mergeo. Yo soy el dueno del repo y soy el
puede mezaclar branches.
