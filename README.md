# termoDaQ API

API para la gestion de estudios y usuarios del ecosistema termoDaQ

## Instalar y ejecutar desde el código fuente

Clone o Descarge el **Repositorio**.

Si Clona:
> Entre en la carpeta termodaq_api-master.

Si Descarga:
> Descomprima el archivo descargado, luego entre en la carpeta termodaq_api-master.

En el terminal ejecute los siguientes comandos:

```bash
# Para instalar
npm install

# Para iniciar el api
npm run start
```

Nota: Es necesario configurar un servidor de base de datos y de correos, utilize un archivo `.env` para realizar dicha configuracion, en el directorio principal se encuentra un archivo `example.env` que puede renombrar.

## Respuesta al iniciar el api de forma local

```bash
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
```

Para continuar realice sus consultas a dicho endpoint.

En la ruta `/explorer` se encuentra disponible un asistente API Explorer, este contiene documentación y brinda herramientas para la realización de consultas de manera local.

## LIVE

El api se encuentra disponible para su acceso en:

```txt
api.termodaq.com.ve/
```

## Documentación

Para una documentación completa ingrese al siguiente HUB:

```txt
https://app.swaggerhub.com/apis-docs/ireiser/termodaq_api/1.0.0/
```

### Modelo ObjectIDstring

```javascript
pattern: ^[a-fA-F\d]{24}$
```

### Modelo Usuario

```javascript
{
  username: string,
  email: string,
  realm: string,
  emailVerified: boolean,
  id: ObjectIDstring
}
```

### Modelo AccessToken

```javascript
{
  id: string,
  ttl: number($double),
  scopes: [...],
  created: string($date-time),
  userId: ObjectIDstring
}
```

### Modelo Perfil

```javascript
{
  nombre: string,
  apellido: string,
  bio: string,
  telefono: string,
  institucion: string,
  pais: string,
  id: ObjectIDstring,
  userId: ObjectIDstring
}
```

### Modelo Muestreo

```javascript
{
  rawline: string,
  rawfields: string,
  latitud: number($double),
  longitud: number($double),
  fecha: string($date-time),
  hora: string,
  fecha_hora: string,
  temperatura_interna: number($double),
  temperatura_aire: number($double),
  temperatura_agua: number($double),
  presion: number($double),
  sensor_adicional: number($double),
  id: ObjectIDstring,
  userId: ObjectIDstring
}
```

### Modelo Etudio

```javascript
{
  data: [],
  id: ObjectIDstring,
  userId: ObjectIDstring
}
```

### Modelo Ficha

```javascript
{
  titulo: string,
  lugar: string,
  descripcion: string,
  investigadores: [...],
  id: ObjectIDstring,
  userId: ObjectIDstring
}
```
