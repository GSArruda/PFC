window.onload = function(){
	data = new Date();
    mes = data.getMonth();
	dia = data.getDate();
	ano = data.getFullYear();
	var str_data = dia + '/' + (mes+1) + '/' + ano;
	document.getElementById("DataAtual").value = str_data
}

$(document).ready(function() {
  $('#inputOculto').hide();
  $('#labelOculto').hide();
  $('#mySelect').change(function() {
    if ($('#mySelect').val() == 'Outros') {
      $('#inputOculto').show();
      $('#labelOculto').show();
    } else {
      $('#inputOculto').hide();
      $('#labelOculto').hide();
    }
  }); 
});

function teste(){
	const produtos = [
		{
			nome: "abacaxi",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:68,
			calor_de_respiracao:630

		},
		{
			nome:"abacate",
			densidade_de_armazenagem:330,
			temperatura_congelamento_produto:-0.70,
			calor_especifico_produto_nao_congelado:0.790,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:52,
			calor_de_respiracao:3600

		},
		{
			nome:"abobora",
			densidade_de_armazenagem:200,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:68,
			calor_de_respiracao:3400
		},
		{
			nome:"acai_polpa",
			densidade_de_armazenagem:420,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:72,
			calor_de_respiracao:0
		},
		{
			nome:"acerola",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.870,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:64,
			calor_de_respiracao:0
		},
		{
			nome:"acucar_cristalizado",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:1.10,
			calor_especifico_produto_nao_congelado:0.300,
			calor_especifico_produto_congelado:0.210,
			calor_latente_congelamento:40,
			calor_de_respiracao:0
		},
		{
			nome:"agua",
			densidade_de_armazenagem:700,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:1.000,
			calor_especifico_produto_congelado:0.500,
			calor_latente_congelamento:80,
			calor_de_respiracao:0
		},
		{
			nome:"aipo",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.950,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:75,
			calor_de_respiracao:403
		},
		{
			nome:"alcachofra",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:67,
			calor_de_respiracao:1840
		},
		{
			nome:"alface",
			densidade_de_armazenagem:110,
			temperatura_congelamento_produto:-0.40,
			calor_especifico_produto_nao_congelado:0.970,
			calor_especifico_produto_congelado:0.490,
			calor_latente_congelamento:76,
			calor_de_respiracao:860
		},
		{
			//Parei aqui  //Continuei 
			nome:"alho_porro_curado",
			densidade_de_armazenagem:150,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.770,
			calor_especifico_produto_congelado:0.380,
			calor_latente_congelamento:49,
			calor_de_respiracao:860
		},
		{
			nome:"alho_seco",
			densidade_de_armazenagem:150,
			temperatura_congelamento_produto:-0.80,
			calor_especifico_produto_nao_congelado:0.690,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:49,
			calor_de_respiracao:0
		},
		{
			nome:"ameixa_fresca",
			densidade_de_armazenagem:320,
			temperatura_congelamento_produto:-1.80,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:69,
			calor_de_respiracao:550
		},
		{
			nome:"amora_preta",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.880,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:68,
			calor_de_respiracao:1100
		},
		{
			nome:"aspargo",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:75,
			calor_de_respiracao:3400
		},
		{
			nome:"azeitona",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.850,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:60,
			calor_de_respiracao:1460
		},
		{
			nome:"bacon_defumado",
			densidade_de_armazenagem:700,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.380,
			calor_especifico_produto_congelado:0.260,
			calor_latente_congelamento:16,
			calor_de_respiracao:0
		},
		{
			nome:"banana",
			densidade_de_armazenagem:200,
			temperatura_congelamento_produto:-1.50,
			calor_especifico_produto_nao_congelado:0.800,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:60,
			calor_de_respiracao:2280
		},
		{
			nome:"batata_doce",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.750,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:55,
			calor_de_respiracao:1330
		},
		{
			nome:"batata_precoce",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.880,
			calor_especifico_produto_congelado:0.440,
			calor_latente_congelamento:64,
			calor_de_respiracao:1100
		},
		{
			nome:"batata_semente",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.860,
			calor_especifico_produto_congelado:0.430,
			calor_latente_congelamento:63,
			calor_de_respiracao:550
		},
		{
			nome:"bebidas_destiladas",
			densidade_de_armazenagem:0,
			temperatura_congelamento_produto:-28.00,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:72,
			calor_de_respiracao:0
		},
		{
			nome:"beringela",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.960,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:75,
			calor_de_respiracao:0
		},
		{
			nome:"beterraba",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.930,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:71,
			calor_de_respiracao:680
		},
		{
			nome:"brocoli",
			densidade_de_armazenagem:170,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.930,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:73,
			calor_de_respiracao:1290
		},
		{
			nome:"cabrito_fresco",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.720,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:56,
			calor_de_respiracao:0
		},
		{
			nome:"cadaver",
			densidade_de_armazenagem:200,
			temperatura_congelamento_produto:-1.80,
			calor_especifico_produto_nao_congelado:0.800,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:56,
			calor_de_respiracao:0
		},
		{
			nome:"cafe_verde",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.300,
			calor_especifico_produto_congelado:0.240,
			calor_latente_congelamento:10,
			calor_de_respiracao:0
		},
		{
			nome:"camarao",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.830,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:66,
			calor_de_respiracao:0
		},
		{
			nome:"caqui",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.840,
			calor_especifico_produto_congelado:0.430,
			calor_latente_congelamento:62,
			calor_de_respiracao:0
		},
		{
			nome:"carne_bovina",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.80,
			calor_especifico_produto_nao_congelado:0.770,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:56,
			calor_de_respiracao:0
		},
		{
			nome:"carne_cozida",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.20,
			calor_especifico_produto_nao_congelado:0.700,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:56,
			calor_de_respiracao:0
		},
		{
			nome:"carne_coelho",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-1.80,
			calor_especifico_produto_nao_congelado:0.750,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:55,
			calor_de_respiracao:0
		},
		{
			nome:"carne_suina_fresca",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.520,
			calor_especifico_produto_congelado:0.320,
			calor_latente_congelamento:30,
			calor_de_respiracao:0
		},
		{
			nome:"cebola",
			densidade_de_armazenagem:220,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.930,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:72,
			calor_de_respiracao:1160
		},
		{
			nome:"cenoura",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.50,
			calor_especifico_produto_nao_congelado:0.930,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:71,
			calor_de_respiracao:1140
		},
		{
			nome:"cereja",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.870,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:64,
			calor_de_respiracao:320
		},
		{
			nome:"cerveja",
			densidade_de_armazenagem:0,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:72,
			calor_de_respiracao:0
		},
		{
			nome:"chocolate_cobertura",
			densidade_de_armazenagem:0,
			temperatura_congelamento_produto:32.00,
			calor_especifico_produto_nao_congelado:0.300,
			calor_especifico_produto_congelado:0.550,
			calor_latente_congelamento:22,
			calor_de_respiracao:0
		},
		{
			nome:"chopp",
			densidade_de_armazenagem:0,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:72,
			calor_de_respiracao:0
		},{
			nome:"coco",
			densidade_de_armazenagem:100,
			temperatura_congelamento_produto:-0.90,
			calor_especifico_produto_nao_congelado:0.580,
			calor_especifico_produto_congelado:0.340,
			calor_latente_congelamento:38,
			calor_de_respiracao:0
		},{
			nome:"cogumelo",
			densidade_de_armazenagem:200,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:73,
			calor_de_respiracao:0
		},{
			nome:"congelados",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-2.00,
			calor_especifico_produto_nao_congelado:0.770,
			calor_especifico_produto_congelado:0.410,
			calor_latente_congelamento:55,
			calor_de_respiracao:0
		},{
			nome:"couve_de_bruxelas",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:68,
			calor_de_respiracao:1670
		},{
			nome:"couve_flor",
			densidade_de_armazenagem:170,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.960,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:76,
			calor_de_respiracao:380
		},{
			nome:"creme_de_leite",
			densidade_de_armazenagem:600,
			temperatura_congelamento_produto:-1.40,
			calor_especifico_produto_nao_congelado:0.790,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:59,
			calor_de_respiracao:0
		},{
			nome:"damasco",
			densidade_de_armazenagem:200,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:68,
			calor_de_respiracao:0
		},{
			nome:"doces_geral",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-1.20,
			calor_especifico_produto_nao_congelado:0.700,
			calor_especifico_produto_congelado:0.340,
			calor_latente_congelamento:30,
			calor_de_respiracao:0
		},{
			nome:"endivia",
			densidade_de_armazenagem:110,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:73,
			calor_de_respiracao:0
		},{
			nome:"ervilha_verde",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.790,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:60,
			calor_de_respiracao:3410
		},{
			nome:"escarola",
			densidade_de_armazenagem:170,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:74,
			calor_de_respiracao:0
		},{
			nome:"espinafre",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.960,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:75,
			calor_de_respiracao:3200
		},{
			nome:"feijao",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-0.90,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:71,
			calor_de_respiracao:4310
		},{
			nome:"fermento",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-0.00,
			calor_especifico_produto_nao_congelado:0.770,
			calor_especifico_produto_congelado:0.410,
			calor_latente_congelamento:57,
			calor_de_respiracao:0
		},{
			nome:"figado",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.770,
			calor_especifico_produto_congelado:0.410,
			calor_latente_congelamento:55,
			calor_de_respiracao:0
		},{
			nome:"figo_fresco",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.870,
			calor_especifico_produto_congelado:0.430,
			calor_latente_congelamento:63,
			calor_de_respiracao:860
		},{
			nome:"franboesa",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-0.70,
			calor_especifico_produto_nao_congelado:0.850,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:65,
			calor_de_respiracao:1390
		},{
			nome:"frango",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-2.80,
			calor_especifico_produto_nao_congelado:0.800,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:60,
			calor_de_respiracao:0
		},{
			nome:"frutas",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:72,
			calor_de_respiracao:500
		},{
			nome:"frutas_frescas",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.550,
			calor_especifico_produto_congelado:0.270,
			calor_latente_congelamento:18,
			calor_de_respiracao:0
		},{
			nome:"ganso_fresco",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-2.80,
			calor_especifico_produto_nao_congelado:0.760,
			calor_especifico_produto_congelado:0.410,
			calor_latente_congelamento:56,
			calor_de_respiracao:0
		},{
			nome:"goiaba",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:72,
			calor_de_respiracao:1700
		},{
			nome:"groselha",
			densidade_de_armazenagem:0,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.900,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:71,
			calor_de_respiracao:120
		},{
			nome:"lagosta",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.830,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:66,
			calor_de_respiracao:0
		},{
			nome:"laranja",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-0.80,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:70,
			calor_de_respiracao:510
		},{
			nome:"laticinios",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.850,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:64,
			calor_de_respiracao:0
		},{
			nome:"leite",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.930,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:70,
			calor_de_respiracao:0
		},{
			nome:"leite_condensado",
			densidade_de_armazenagem:600,
			temperatura_congelamento_produto:-15.00,
			calor_especifico_produto_nao_congelado:0.420,
			calor_especifico_produto_congelado:0.280,
			calor_latente_congelamento:23,
			calor_de_respiracao:0
		},{
			nome:"lima",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-1.60,
			calor_especifico_produto_nao_congelado:0.890,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:69,
			calor_de_respiracao:380
		},{
			nome:"limao",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:71,
			calor_de_respiracao:770
		},{
			nome:"linguica_defumada",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.680,
			calor_especifico_produto_congelado:0.380,
			calor_latente_congelamento:48,
			calor_de_respiracao:0
		},{
			nome:"linguica_fresca",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-3.30,
			calor_especifico_produto_nao_congelado:0.530,
			calor_especifico_produto_congelado:0.310,
			calor_latente_congelamento:31,
			calor_de_respiracao:0
		},{
			nome:"lixo",
			densidade_de_armazenagem:0,
			temperatura_congelamento_produto:-1.00,
			calor_especifico_produto_nao_congelado:0.800,
			calor_especifico_produto_congelado:0.550,
			calor_latente_congelamento:60,
			calor_de_respiracao:0
		},{
			nome:"maca",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.890,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:69,
			calor_de_respiracao:230
		},{
			nome:"mamao",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-0.90,
			calor_especifico_produto_nao_congelado:0.820,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:73,
			calor_de_respiracao:950
		},{
			nome:"manga",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.890,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:74,
			calor_de_respiracao:2320
		},{
			nome:"manteiga",
			densidade_de_armazenagem:600,
			temperatura_congelamento_produto:-10.50,
			calor_especifico_produto_nao_congelado:0.360,
			calor_especifico_produto_congelado:0.250,
			calor_latente_congelamento:13,
			calor_de_respiracao:0
		},{
			nome:"margarina",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.320,
			calor_especifico_produto_congelado:0.250,
			calor_latente_congelamento:13,
			calor_de_respiracao:0
		},{
			nome:"marmelo",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-2.00,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:68,
			calor_de_respiracao:0
		},{
			nome:"mel",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.350,
			calor_especifico_produto_congelado:0.260,
			calor_latente_congelamento:15,
			calor_de_respiracao:0
		},{
			nome:"melaco",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.480,
			calor_especifico_produto_congelado:0.310,
			calor_latente_congelamento:29,
			calor_de_respiracao:0
		},{
			nome:"melancia",
			densidade_de_armazenagem:100,
			temperatura_congelamento_produto:-1.60,
			calor_especifico_produto_nao_congelado:0.970,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:73,
			calor_de_respiracao:0
		},{
			nome:"melao",
			densidade_de_armazenagem:160,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:75,
			calor_de_respiracao:277
		},{
			nome:"milho_de_pipoca",
			densidade_de_armazenagem:750,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.310,
			calor_especifico_produto_congelado:0.240,
			calor_latente_congelamento:11,
			calor_de_respiracao:0
		},{
			nome:"milho_verde",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.840,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:60,
			calor_de_respiracao:2940
		},{
			nome:"miudos",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.700,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:50,
			calor_de_respiracao:0
		},{
			nome:"molusco_fresco",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.840,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:66,
			calor_de_respiracao:0
		},{
			nome:"morango",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:72,
			calor_de_respiracao:990
		},{
			nome:"nabo",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.950,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:74,
			calor_de_respiracao:480
		},{
			nome:"nata",
			densidade_de_armazenagem:600,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.730,
			calor_especifico_produto_congelado:0.390,
			calor_latente_congelamento:52,
			calor_de_respiracao:0
		},{
			nome:"nectarina",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.930,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:71,
			calor_de_respiracao:210
		},{
			nome:"nozes",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.420,
			calor_especifico_produto_congelado:0.220,
			calor_latente_congelamento:4,
			calor_de_respiracao:0
		},{
			nome:"oleo_vegetal",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-3.60,
			calor_especifico_produto_nao_congelado:0.320,
			calor_especifico_produto_congelado:0.250,
			calor_latente_congelamento:12,
			calor_de_respiracao:0
		},{
			nome:"ostra",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-2.80,
			calor_especifico_produto_nao_congelado:0.830,
			calor_especifico_produto_congelado:0.440,
			calor_latente_congelamento:64,
			calor_de_respiracao:0
		},{
			nome:"ovo_casca",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.730,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:54,
			calor_de_respiracao:0
		},{
			nome:"ovo_liquido",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.800,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:59,
			calor_de_respiracao:0
		},{
			nome:"ovo_resfriado",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.730,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:54,
			calor_de_respiracao:0
		},{
			nome:"pao_assado",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-7.80,
			calor_especifico_produto_nao_congelado:0.700,
			calor_especifico_produto_congelado:0.340,
			calor_latente_congelamento:50,
			calor_de_respiracao:0
		},{
			nome:"pao_de_queijo",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-3.00,
			calor_especifico_produto_nao_congelado:0.520,
			calor_especifico_produto_congelado:0.340,
			calor_latente_congelamento:50,
			calor_de_respiracao:0
		},{
			nome:"pao_massa",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-2.00,
			calor_especifico_produto_nao_congelado:0.450,
			calor_especifico_produto_congelado:0.340,
			calor_latente_congelamento:29,
			calor_de_respiracao:0
		},{
			nome:"peixe_defumado",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.700,
			calor_especifico_produto_congelado:0.390,
			calor_latente_congelamento:52,
			calor_de_respiracao:0
		},{
			nome:"peixe_fresco",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.850,
			calor_especifico_produto_congelado:0.440,
			calor_latente_congelamento:66,
			calor_de_respiracao:0
		},{
			nome:"pepino",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-0.80,
			calor_especifico_produto_nao_congelado:0.970,
			calor_especifico_produto_congelado:0.490,
			calor_latente_congelamento:76,
			calor_de_respiracao:0
		},{
			nome:"pera",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.60,
			calor_especifico_produto_nao_congelado:0.900,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:67,
			calor_de_respiracao:230
		},{
			nome:"peru_fresco",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-2.80,
			calor_especifico_produto_nao_congelado:0.720,
			calor_especifico_produto_congelado:0.390,
			calor_latente_congelamento:52,
			calor_de_respiracao:0
		},{
			nome:"pimenta_doce",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-0.70,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:73,
			calor_de_respiracao:1190
		},{
			nome:"pimenta_malagueta",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-0.40,
			calor_especifico_produto_nao_congelado:0.300,
			calor_especifico_produto_congelado:0.240,
			calor_latente_congelamento:10,
			calor_de_respiracao:1190
		},{
			nome:"pimenta_seca",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.300,
			calor_especifico_produto_congelado:0.240,
			calor_latente_congelamento:10,
			calor_de_respiracao:0
		},{
			nome:"pimentao",
			densidade_de_armazenagem:250,
			temperatura_congelamento_produto:-0.70,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:74,
			calor_de_respiracao:1190
		},{
			nome:"polpa_de_fruta",
			densidade_de_armazenagem:420,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:72,
			calor_de_respiracao:0
		},{
			nome:"presunto_pernil_defumado",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.560,
			calor_especifico_produto_congelado:0.330,
			calor_latente_congelamento:33,
			calor_de_respiracao:0
		},{
			nome:"presunto_pernil_fresco",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.80,
			calor_especifico_produto_nao_congelado:0.600,
			calor_especifico_produto_congelado:0.370,
			calor_latente_congelamento:45,
			calor_de_respiracao:0
		},{
			nome:"queijo_processado",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-7.20,
			calor_especifico_produto_nao_congelado:0.500,
			calor_especifico_produto_congelado:0.310,
			calor_latente_congelamento:32,
			calor_de_respiracao:0
		},{
			nome:"quiabo",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:73,
			calor_de_respiracao:5220
		},{
			nome:"rabanete",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-0.80,
			calor_especifico_produto_nao_congelado:0.950,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:76,
			calor_de_respiracao:960
		},{
			nome:"rabanete_picante",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-1.80,
			calor_especifico_produto_nao_congelado:0.780,
			calor_especifico_produto_congelado:0.420,
			calor_latente_congelamento:58,
			calor_de_respiracao:0
		},{
			nome:"resfriados",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-2.00,
			calor_especifico_produto_nao_congelado:0.770,
			calor_especifico_produto_congelado:0.410,
			calor_latente_congelamento:55,
			calor_de_respiracao:0
		},{
			nome:"roma",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-2.80,
			calor_especifico_produto_nao_congelado:0.890,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:66,
			calor_de_respiracao:0
		},{
			nome:"salsicharia",
			densidade_de_armazenagem:280,
			temperatura_congelamento_produto:-3.90,
			calor_especifico_produto_nao_congelado:0.860,
			calor_especifico_produto_congelado:0.560,
			calor_latente_congelamento:48,
			calor_de_respiracao:0
		},{
			nome:"salsinha",
			densidade_de_armazenagem:150,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:68,
			calor_de_respiracao:0
		},{
			nome:"sangue",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:62,
			calor_de_respiracao:0
		},{
			nome:"sorvete_massa",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-6.00,
			calor_especifico_produto_nao_congelado:0.700,
			calor_especifico_produto_congelado:0.390,
			calor_latente_congelamento:49,
			calor_de_respiracao:0
		},{
			nome:"suco_de_laranja_fresco",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:72,
			calor_de_respiracao:0
		},{
			nome:"tamara_seca",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-15.70,
			calor_especifico_produto_nao_congelado:0.520,
			calor_especifico_produto_congelado:0.260,
			calor_latente_congelamento:17,
			calor_de_respiracao:0
		},{
			nome:"tangerina",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:70,
			calor_de_respiracao:0
		},{
			nome:"tomate_verde",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.950,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:75,
			calor_de_respiracao:1060
		},{
			nome:"tomate_vermelho",
			densidade_de_armazenagem:450,
			temperatura_congelamento_produto:-0.50,
			calor_especifico_produto_nao_congelado:0.940,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:75,
			calor_de_respiracao:540
		},{
			nome:"toranja_pomelo",
			densidade_de_armazenagem:400,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.910,
			calor_especifico_produto_congelado:0.460,
			calor_latente_congelamento:71,
			calor_de_respiracao:660
		},{
			nome:"uva_seca",
			densidade_de_armazenagem:600,
			temperatura_congelamento_produto:0.00,
			calor_especifico_produto_nao_congelado:0.510,
			calor_especifico_produto_congelado:0.280,
			calor_latente_congelamento:15,
			calor_de_respiracao:0
		},{
			nome:"uva_americana",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.890,
			calor_especifico_produto_congelado:0.450,
			calor_latente_congelamento:66,
			calor_de_respiracao:152
		},{
			nome:"uva_europeia",
			densidade_de_armazenagem:500,
			temperatura_congelamento_produto:-1.90,
			calor_especifico_produto_nao_congelado:0.860,
			calor_especifico_produto_congelado:0.440,
			calor_latente_congelamento:65,
			calor_de_respiracao:130
		},{
			nome:"vacina",
			densidade_de_armazenagem:200,
			temperatura_congelamento_produto:-0.10,
			calor_especifico_produto_nao_congelado:0.980,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:78,
			calor_de_respiracao:0
		},{
			nome:"vagem",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-0.60,
			calor_especifico_produto_nao_congelado:0.930,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:72,
			calor_de_respiracao:4310
		},{
			nome:"verduras",
			densidade_de_armazenagem:350,
			temperatura_congelamento_produto:-1.10,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.480,
			calor_latente_congelamento:72,
			calor_de_respiracao:500
		},{
			nome:"vinho",
			densidade_de_armazenagem:0,
			temperatura_congelamento_produto:-2.20,
			calor_especifico_produto_nao_congelado:0.920,
			calor_especifico_produto_congelado:0.470,
			calor_latente_congelamento:72,
			calor_de_respiracao:0
		},{
			nome:"vitela_fresca",
			densidade_de_armazenagem:300,
			temperatura_congelamento_produto:-1.70,
			calor_especifico_produto_nao_congelado:0.740,
			calor_especifico_produto_congelado:0.400,
			calor_latente_congelamento:53,
			calor_de_respiracao:0
		}
	]
}

function calcular(){

	//Primeira Página
	//var comprimento = document.getElementById("Comprimento").value 
	//var largura = document.getElementById("Largura").value
	var comprimento = $("[name='tx_comprimento']").val();
	var largura = $("[name='tx_largura']").val();
	var altura = $("[name='tx_altura']").val();
	var tempInterna = $("[name='tx_TempInterna']").val();
	var conduTermi = $("[name='tx_ConduTermi']").val();
	var espessuraIsolamento = $("[name='tx_EspessuraIsolamento']").val();
	var tempExterna = $("[name='tx_TempExterna']").val();
	var frequencia = $("[name='tx_Frequencia']").val();
	

	//Primeira Página
	//window.localStorage.setItem("tx_comprimento", comprimento);
	window.localStorage['tx_comprimento'] = comprimento;
	window.localStorage['tx_largura'] = largura;
	window.localStorage['tx_altura'] = altura;
	window.localStorage['tx_TempInterna'] = tempInterna;
	window.localStorage['tx_ConduTermi'] = conduTermi;
	window.localStorage['tx_EspessuraIsolamento'] = espessuraIsolamento;
	window.localStorage['tx_TempExterna'] = tempExterna;
	window.localStorage['tx_Frequencia'] = frequencia;

	volume = (comprimento * largura) * altura;
	area = comprimento * largura;

 	$('#areaDoPiso').val(area);
 	$('#volume').val(volume);
}

function validacao(){
	//nome
	if(document.dados.tx_nome.value == ""){
		alert("Preencha o campo NOME.")
		document.dados.tx_nome.focus();
		return false;
	}

	//obra
	if(document.dados.tx_obra.value == ""){
		alert("Preencha o campo 0BRA.")
		document.dados.tx_obra.focus();
		return false;
	}

	//comprimento
	if (document.dados.tx_comprimento.value == ""){
		alert("Preencha o campo COMPRIMENTO.")
		document.dados.tx_comprimento.focus();
		return false;
	}else if(isNaN(dados.tx_comprimento.value)){
		alert("Preencha o campo COMPRIMENTO apenas com NÚMEROS.")
		document.dados.tx_comprimento.focus();
		return false;
	}   

	//largura
	if (document.dados.tx_largura.value == ""){
		alert("Preencha o campo LARGURA.")
		document.dados.tx_largura.focus();
		return false;
	}else if(isNaN(dados.tx_largura.value)){
		alert("Preencha o campo LARGURA apenas com NÚMEROS.")
		document.dados.tx_largura.focus();
		return false;
	}   

	//altura
	if (document.dados.tx_altura.value == ""){
		alert("Preencha o campo ALTURA.")
		document.dados.tx_altura.focus();
		return false;
	}else if(isNaN(dados.tx_altura.value)){
		alert("Preencha o campo ALTURA apenas com NÚMEROS.")
		document.dados.tx_altura.focus();
		return false;
	}

	//Temperatura Interna
	if (document.dados.tx_TempInterna.value == ""){
		alert("Preencha o campo TEMPERATURA INTERNA.")
		document.dados.tx_TempInterna.focus();
		return false;
	}else if(isNaN(dados.tx_TempInterna.value)){
		alert("Preencha o campo TEMPERATURA INTERNA apenas com NÚMEROS.")
		document.dados.tx_TempInterna.focus();
		return false;
	}
/**
	if()
	//Condutividade Térmica
	if (document.dados.tx_ConduTermi.value == ""){
		alert("Preencha o campo CONDUTIVIDADE TÉRMICA.")
		document.dados.tx_ConduTermi.focus();
		return false;
	}else if(isNaN(dados.tx_ConduTermi.value)){
		alert("Preencha o campo CONDUTIVIDADE TÉRMICA apenas com NÚMEROS.")
		document.dados.tx_ConduTermi.focus();
		return false;
	}
**/

	//Espessura Isolamento
	if (document.dados.tx_EspessuraIsolamento.value == ""){
		alert("Preencha o campo ESPESSURA DO ISOLAMENTO.")
		document.dados.tx_EspessuraIsolamento.focus();
		return false;
	}else if(isNaN(dados.tx_EspessuraIsolamento.value)){
		alert("Preencha o campo ESPESSURA DO ISOLAMENTO apenas com NÚMEROS.")
		document.dados.tx_EspessuraIsolamento.focus();
		return false;
	}

	//Temperatura Externa
	if (document.dados.tx_TempExterna.value == ""){
		alert("Preencha o campo TEMPERATURA EXTERNA.")
		document.dados.tx_TempExterna.focus();
		return false;
	}else if(isNaN(dados.tx_TempExterna.value)){
		alert("Preencha o campo TEMPERATURA EXTERNA apenas com NÚMEROS.")
		document.dados.tx_TempExterna.focus();
		return false;
	}

	//Frequência
	if (document.dados.tx_Frequencia.value == ""){
		alert("Preencha o campo FREQUÊNCIA.")
		document.dados.tx_Frequencia.focus();
		return false;
	}else if(isNaN(dados.tx_Frequencia.value)){
		alert("Preencha o campo FREQUÊNCIA apenas com NÚMEROS.")
		document.dados.tx_Frequencia.focus();
		return false;
	}

	////////////////////////////SEGUNDA PAGE///////////////////////////////////////////////
	//Massa Total de Produto Armazenado
	if (document.dados.tx_MassaTotalArma.value == ""){
		alert("Preencha o campo MASSA TOTAL DE PRODUTO ARMAZENADO.")
		document.dados.tx_MassaTotalArma.focus();
		return false;
	}else if(isNaN(dados.tx_MassaTotalArma.value)){
		alert("Preencha o campo MASSA TOTAL DE PRODUTO ARMAZENADO apenas com NÚMEROS.")
		document.dados.tx_MassaTotalArma.focus();
		return false;
	}

	//Massa de Produto em Movimento
	if (document.dados.tx_MassaProdMov.value == ""){
		alert("Preencha o campo MASSA DE PRODUTO EM MOVIMENTO.")
		document.dados.tx_MassaProdMov.focus();
		return false;
	}else if(isNaN(dados.tx_MassaProdMov.value)){
		alert("Preencha o campo MASSA DE PRODUTO EM MOVIMENTO apenas com NÚMEROS.")
		document.dados.tx_MassaProdMov.focus();
		return false;
	}

	//Tempo de Resfriamento e/ou Congelamento do Produto
	if (document.dados.tx_TempResfCongProd.value == ""){
		alert("Preencha o campo TEMPO DE RESFRIAMENTO E/OU CONGELAMENTO DO PRODUTO.")
		document.dados.tx_TempResfCongProd.focus();
		return false;
	}else if(isNaN(dados.tx_TempResfCongProd.value)){
		alert("Preencha o campo TEMPO DE RESFRIAMENTO E/OU CONGELAMENTO DO PRODUTO apenas com NÚMEROS.")
		document.dados.tx_TempResfCongProd.focus();
		return false;
	}

	//Temperatura de Entrada do Produto
	if (document.dados.tx_TempEntrada.value == ""){
		alert("Preencha o campo TEMPERATURA DE ENTRADA DO PRODUTO.")
		document.dados.tx_TempEntrada.focus();
		return false;
	}else if(isNaN(dados.tx_TempEntrada.value)){
		alert("Preencha o campo TEMPERATURA DE ENTRADA DO PRODUTO apenas com NÚMEROS.")
		document.dados.tx_TempEntrada.focus();
		return false;
	}

	////////////////////////////////TERCEIRA PÁGINA/////////////////////////////////
	//Numero de Pessoas 
	if (document.dados.tx_NumPessoas.value == ""){
		alert("Preencha o campo NÚMERO DE PESSOAS.")
		document.dados.tx_NumPessoas.focus();
		return false;
	}else if(isNaN(dados.tx_NumPessoas.value)){
		alert("Preencha o campo NÚMERO DE PESSOAS apenas com NÚMEROS.")
		document.dados.tx_NumPessoas.focus();
		return false;
	}

	//Tempo de Permanência das Pessoas
	if (document.dados.tx_TempPermPessoas.value == ""){
		alert("Preencha o campo TEMPO DE PERMANÊNCIA DAS PESSOAS.")
		document.dados.tx_TempPermPessoas.focus();
		return false;
	}else if(isNaN(dados.tx_TempPermPessoas.value)){
		alert("Preencha o campo TEMPO DE PERMANÊNCIA DAS PESSOAS apenas com NÚMEROS.")
		document.dados.tx_TempPermPessoas.focus();
		return false;
	}

	//Potência de Iluminação
	if (document.dados.tx_PotIlumina.value == ""){
		alert("Preencha o campo POTÊNCIA DE ILUMINAÇÃO DAS PESSOAS.")
		document.dados.tx_PotIlumina.focus();
		return false;
	}else if(isNaN(dados.tx_PotIlumina.value)){
		alert("Preencha o campo POTÊNCIA DE ILUMINAÇÃO apenas com NÚMEROS.")
		document.dados.tx_PotIlumina.focus();
		return false;
	}

	//Tempo de Iluminação
	if (document.dados.tx_TempIlumina.value == ""){
		alert("Preencha o campo TEMPO DE ILUMINAÇÃO.")
		document.dados.tx_TempIlumina.focus();
		return false;
	}else if(isNaN(dados.tx_TempIlumina.value)){
		alert("Preencha o campo TEMPO DE ILUMINAÇÃO apenas com NÚMEROS.")
		document.dados.tx_TempIlumina.focus();
		return false;
	}

	//Potência de Motores(exceto dos evaporadores)
	if (document.dados.tx_PotMotores.value == ""){
		alert("Preencha o campo POTÊNCIA DE MOTORES.")
		document.dados.tx_PotMotores.focus();
		return false;
	}else if(isNaN(dados.tx_PotMotores.value)){
		alert("Preencha o campo POTÊNCIA DE MOTORES apenas com NÚMEROS.")
		document.dados.tx_PotMotores.focus();
		return false;
	}

	//Tempo de Operação dos Motores
	if (document.dados.tx_TempOpeMotores.value == ""){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS MOTOROES.")
		document.dados.tx_TempOpeMotores.focus();
		return false;
	}else if(isNaN(dados.tx_TempOpeMotores.value)){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS MOTOROES apenas com NÚMEROS.")
		document.dados.tx_TempOpeMotores.focus();
		return false;
	}

	//Fator de Segurança
	if (document.dados.tx_FatSeguranca.value == ""){
		alert("Preencha o campo FATOR DE SEGURANÇA.")
		document.dados.tx_FatSeguranca.focus();
		return false;
	}else if(isNaN(dados.tx_FatSeguranca.value)){
		alert("Preencha o campo FATOR DE SEGURANÇA apenas com NÚMEROS.")
		document.dados.tx_FatSeguranca.focus();
		return false;
	}

	//Tempo de Operação do Compressor
	if (document.dados.tx_TempOpeCompre.value == ""){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS COMPRESSOR.")
		document.dados.tx_TempOpeCompre.focus();
		return false;
	}else if(isNaN(dados.tx_TempOpeCompre.value)){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS COMPRESSOR apenas com NÚMEROS.")
		document.dados.tx_TempOpeCompre.focus();
		return false;
	}
}