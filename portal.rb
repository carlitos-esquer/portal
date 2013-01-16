require 'sinatra'
require 'slim'

# revisar el formato del layout
# y la manera en que renderea las páginas
# revisar funcionalidad javascript
get '/' do
	slim :index
end

get '/inicio' do
	slim :index
end

get '/slider' do
end

get '/desarrollo' do
	slim :desarrollo
end

get '/capacitacion' do
	slim :capacitacion
end

get '/promociones' do
	slim :promociones
end

get '/elearning' do
	slim :elearning
end

get '/portafolio' do
	slim :portafolio
end

get '/demos' do
	slim :demos
end

get '/nosotros' do
	slim :nosotros
end

get '/blog' do
	redirect "http://blog.zinlim.com"
end

get '/soporte' do
	slim :soporte
end

get '/ingresar' do
end
