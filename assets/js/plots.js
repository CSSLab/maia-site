function draw_main_bar_plot() {
    var ctx = document.getElementById('maia_bars').getContext('2d');
    main_chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Stockfish', 'Leela', 'Maia'],
            datasets: [{
                label: 'Accuracy',
                data: [38.718, 44.512, 51.802],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            tooltips: {
                enabled : false,
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Model',
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Accuracy',
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

maia_data = { "labels": [1100.0, 1200.0, 1300.0, 1400.0, 1500.0, 1600.0, 1700.0, 1800.0, 1900.0], "datasets": [{ "label": "Maia 1100", "borderColor": "rgb(255,169,115)", "fill": false, "data": [0.5048074118399252, 0.5083059781885401, 0.5082787965863198, 0.507637761088173, 0.5013122208595301, 0.49452090675439747, 0.4893443090172237, 0.48142151026523305, 0.4698201070306627] }, { "label": "Maia 1200", "borderColor": "rgb(251,126,94)", "fill": false, "data": [0.5020216499266548, 0.507977859929808, 0.5106949336808481, 0.5122040177832533, 0.5077720135254498, 0.5033330544277346, 0.4984017811804643, 0.49167662496328424, 0.48095094421477974] }, { "label": "Maia 1300", "borderColor": "rgb(234,84,98)", "fill": false, "data": [0.5004054099282063, 0.5074135941573503, 0.513430435448625, 0.5178513684169607, 0.5151151628561154, 0.5125960593162312, 0.5095296253211575, 0.5033572969403333, 0.4930969033748744] }, { "label": "Maia 1400", "borderColor": "rgb(201,62,115)", "fill": false, "data": [0.4951343466982289, 0.5037768880644409, 0.5117223794659531, 0.5174258796074958, 0.517839759352277, 0.5164825324093213, 0.5163913560964236, 0.512939282435357, 0.5039409911358695] }, { "label": "Maia 1500", "borderColor": "rgb(164,49,127)", "fill": false, "data": [0.48816516447031866, 0.4986811958712656, 0.5087234000219635, 0.5159154447846614, 0.5180198903232942, 0.5211444221709924, 0.5223609519150252, 0.5206646615851956, 0.5135550267103153] }, { "label": "Maia 1600", "borderColor": "rgb(127,36,130)", "fill": false, "data": [0.4804842229339774, 0.49091249215440574, 0.500602966525224, 0.510660866526968, 0.5165327932560058, 0.5203332968601087, 0.524587301448455, 0.5252206254115427, 0.5209950480443453] }, { "label": "Maia 1700", "borderColor": "rgb(89,21,126)", "fill": false, "data": [0.4731351613787744, 0.4839965368121106, 0.4940926299682128, 0.5051077363667418, 0.5116224799639787, 0.5181430392520056, 0.5244884855842772, 0.5270494837456026, 0.5249450695484232] }, { "label": "Maia 1800", "borderColor": "rgb(51,16,103)", "fill": false, "data": [0.4645958032363057, 0.4759339515650206, 0.48766256858944684, 0.4979323645107661, 0.5048018736080323, 0.5136212097615396, 0.5216880632010754, 0.5265327619702365, 0.5279997436153431] }, { "label": "Maia 1900", "borderColor": "rgb(18,13,50)", "fill": false, "data": [0.4588842110530762, 0.47021509599596145, 0.4806254452171544, 0.49231466377875394, 0.49955249014944375, 0.5087540887283014, 0.5185930433910383, 0.5257298732935858, 0.528688411823979] }] }

sf_data = { "labels": [1100.0, 1200.0, 1300.0, 1400.0, 1500.0, 1600.0, 1700.0, 1800.0, 1900.0], "datasets": [{ "label": "Stockfish D01", "borderColor": "rgb(122,210,81)", "fill": false, "data": [0.3654861257856972, 0.36983081491387276, 0.37268101165255996, 0.37948564892876513, 0.3796764814441306, 0.38423736234859457, 0.38763719141438135, 0.39039817800739823, 0.3911048670198326] }, { "label": "Stockfish D03", "borderColor": "rgb(68,192,113)", "fill": false, "data": [0.3459004107455721, 0.34753895660874395, 0.3483954802183432, 0.3519699206721526, 0.35244463737845455, 0.3523614805799236, 0.3563379831360424, 0.3576338593439617, 0.3588613580795284] }, { "label": "Stockfish D05", "borderColor": "rgb(34,169,133)", "fill": false, "data": [0.3383978943914278, 0.3388772332151378, 0.3421538044303211, 0.3452837000038707, 0.3465137206173752, 0.3471441720811213, 0.3506418165693719, 0.3532589697334552, 0.3544177667758171] }, { "label": "Stockfish D07", "borderColor": "rgb(33,145,141)", "fill": false, "data": [0.34722110177952265, 0.35168327871041355, 0.355973668943746, 0.3612291481806772, 0.3631459176836633, 0.36656858611397636, 0.370524715029776, 0.37438285855876524, 0.37843774474223946] }, { "label": "Stockfish D09", "borderColor": "rgb(42,121,143)", "fill": false, "data": [0.35807315853228167, 0.3624462156559346, 0.3671708972626308, 0.373901268462834, 0.3769607209055899, 0.3821012905704176, 0.38605071993609114, 0.39156792998398204, 0.39751264063962877] }, { "label": "Stockfish D11", "borderColor": "rgb(53,95,142)", "fill": false, "data": [0.3615716772793315, 0.36710054599159586, 0.37313517732909135, 0.3801624003037061, 0.3838300992761501, 0.3893023830681315, 0.3939886845667689, 0.3984637798346045, 0.4061096155881164] }, { "label": "Stockfish D13", "borderColor": "rgb(65,68,136)", "fill": false, "data": [0.3628701167202338, 0.3686213298532446, 0.37345801982225746, 0.38156729452412463, 0.38544056069429156, 0.39108453598021947, 0.3965787439015668, 0.40224286451245495, 0.4092685858070651] }, { "label": "Stockfish D15", "borderColor": "rgb(72,36,117)", "fill": false, "data": [0.3641735320345914, 0.3708411158776104, 0.37489234580951364, 0.38279161195191824, 0.38717989516191786, 0.3923861677559097, 0.3979229243128041, 0.4040044810344391, 0.4113250316803383] }] };
var leela_data = { "labels": [1100.0, 1200.0, 1300.0, 1400.0, 1500.0, 1600.0, 1700.0, 1800.0, 1900.0], "datasets": [{ "label": "Leela  0800", "borderColor": "rgb(149,175,181)", "fill": false, "data": [0.2357197265389274, 0.22727532900491268, 0.2217132724817373, 0.21819477671266285, 0.21289089523709165, 0.20669521707980493, 0.20355820993633875, 0.2000559093441196, 0.19386536470220014] }, { "label": "Leela  1000", "borderColor": "rgb(131,149,163)", "fill": false, "data": [0.26332567324437384, 0.25612186805680964, 0.25040130480139156, 0.24638247693597848, 0.24064183009936424, 0.23508988794895813, 0.23160965054379637, 0.2278074485736247, 0.22136111676051334] }, { "label": "Leela  1600", "borderColor": "rgb(112,124,144)", "fill": false, "data": [0.3142836812685672, 0.3098571755540558, 0.30489071074937496, 0.3022202853157198, 0.29774741581725234, 0.29267158680965805, 0.28899485497729865, 0.28450383387852607, 0.2789705791159399] }, { "label": "Leela  1800", "borderColor": "rgb(93,97,125)", "fill": false, "data": [0.33616734702722445, 0.33109515471741063, 0.326392797303048, 0.32201645074309904, 0.3178897013527892, 0.31381642655013037, 0.3085752978941418, 0.30475590550845044, 0.29815322098216845] }, { "label": "Leela  2200", "borderColor": "rgb(75,75,104)", "fill": false, "data": [0.3711707929062485, 0.36793103143907757, 0.3656355595446294, 0.3624769209655476, 0.35987846518230887, 0.3560429509544291, 0.35287891443414193, 0.35009679495343815, 0.3438181098241284] }, { "label": "Leela  2700", "borderColor": "rgb(56,56,78)", "fill": false, "data": [0.39991936307835446, 0.4020750436386233, 0.40228226269111256, 0.4028613406965706, 0.40252911430990335, 0.40144357722799734, 0.4026744837540036, 0.4024393875192802, 0.399429533080264] }, { "label": "Leela  2900", "borderColor": "rgb(37,37,51)", "fill": false, "data": [0.41292853631183185, 0.4171650808603375, 0.41970009841999695, 0.4229524638870487, 0.4235924050608663, 0.42484574737946107, 0.42717641628191655, 0.4275887502667512, 0.42583190604304844] }, { "label": "Leela  3200", "borderColor": "rgb(18,18,26)", "fill": false, "data": [0.42201681882696235, 0.4301156918608111, 0.4355404939240674, 0.44222993725289234, 0.4451176251634652, 0.4501002460435623, 0.4540849287256814, 0.45765637440322315, 0.4599611691580362] }] };

var line_plt_options = {
    tooltips: {
        enabled: false,
    },
    legend: {
        display: true,
        position: 'right',
    },
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Rating',
            },
            gridLines: {
                display: false,
            }
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Accuracy',
            },
            /*
            ticks: {
                min: .33,
                max: .53,
            }*/
            gridLines: {
                display: true,
            }
        }]
    }
}

function draw_main_line_plot(data_set, canvas_id) {
    ctx = document.getElementById(canvas_id).getContext('2d'); //'maia_lines'
    var config = {
        type: 'line',
        data: data_set,
        options: line_plt_options
    };
    TestLineChart = new Chart(ctx, config);
}

