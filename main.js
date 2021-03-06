#!/usr/bin/env node
const TeleBot = require('telebot');
const bot = new TeleBot('398889955:AAFxjVgOxWPhxO7S-xKy_sc6A90mFZpQ6Rk');

bot.on('/масло_мотор', (msg) => msg.reply.text('В мотор 2.0 5w40, 5w30 4.5л\n' +
    'В мотор 1.8 5w40, 5w30 4.2л\n' +
    'менять раз в 8-10тыс. км\n' +
    'Масляный фильтр SHY114302\n' +
    '       прокладка 9956-41-400'));
bot.on('/масло_акпп', (msg) => msg.reply.text('SJ01-21-500 фильтр АКПП;\n' +
    'SJ01-19-852 прокладка (кольцо) под фильтр АКПП;\n' +
    'SJ01-19-835 пркладка поддона АКПП;\n' +
    'BT24-19-859 прокладка сливной и контрольной пробок (2 шт.);\n' +
    'JWS3309 тип жидкости АКПП (7.4л, с учетм промывки 11-12л)\n'+
    'Замена www.drive2.ru/l/488178216003960940/'));
bot.on('/масло_мкпп', (msg) => msg.reply.text('Motul gear 300 75w90 2.1л'));
bot.on('/масло_редуктор', (msg) => msg.reply.text('GL-5 70W-90, 0.8л\n'+
    'например Motul gear 300 LS 75w90\n' +
    'болт сапун 073026060\n'+
    'медное кольцо-прокладка\n'+
    'замена раз в 50-70 тыс.км\n'+
    'Для замены ключ на 17, на 23'));
bot.on('/антифриз', (msg) => msg.reply.text('FL22 7-8л.'));
bot.on('/воздушный_фильтр', (msg) => msg.reply.text('LFG113Z409A'));
bot.on('/топливный_фильтр', (msg) => msg.reply.text('Топливный фильтр сеточка LFB613ZE1\n' +
    'Топливный фильтр тонкой очистки LFG113ZE0\n'+
    'менять раз в 60-100 тыс.км\n'+
    'инструкция: www.drive2.ru/l/456058732577555218/'));
bot.on(['/ремень','/ролик'], (msg) => msg.reply.text('Ремень приводной LF1715909B\n' + 
    'Ролик приводного ремня VKM64003'));
bot.on('/свечи', (msg) => msg.reply.text('Denso ITV20 или ' +
    'NGK ILTR6A-13G 4шт.\n'+
    'менять раз в 70тыс. км'));
bot.on('/тормозная_жидкость', (msg) => msg.reply.text('Dot 5.1, 1л\n'+
    'менять раз в 2 года\n'+
    'прокачка www.drive2.ru/l/453008412444198294/'));
bot.on('/жидкость_гура', (msg) => msg.reply.text('www.drive2.ru/l/464755594675355838/'));
bot.on('/замена_цепи_грм', (msg) => msg.reply.text('www.drive2.ru/l/470868329569976384/'));
bot.on('/скрипит_салон', (msg) => msg.reply.text('www.drive2.ru/l/494521573462508290/ \n'+
    'www.drive2.ru/l/7132233/'));
bot.on('/вода_в_салоне', (msg) => msg.reply.text('Герметизация клипс: www.drive2.ru/l/494521573462508290/ '+
    'www.drive2.ru/l/456900133850711488/\n'+
    'чистка дренажа www.drive2.ru/l/453010061711639835/'));
bot.on('/привод_крыши', (msg) => msg.reply.text('www.drive2.ru/l/455407271938097568/ \n'+
    'www.drive2.ru/l/476613002947199309/'));
bot.on('/кулиса', (msg) => msg.reply.text('замена масла www.drive2.ru/l/481051731388530842/ \n'+
    'www.drive2.ru/l/481052006266438033/'));
bot.on('/стучит_двигатель', (msg) => msg.reply.text('Терпи, это тазда'));
bot.on('/плавают_обороты_хх', (msg) => msg.reply.text('Снимал клемму аккумулятора - дай тазде настроиться. Пройдет само.'))
bot.on('/чистка_дросселя', (msg) => msg.reply.text('www.drive2.ru/l/490184824724652399/'));
bot.on('/свист_под_капотом', (msg) => msg.reply.text('Изношенный ремень проскальзывает по роликам и свистит. Изношенный ролик будет шуршать.'))

bot.on('/шум_сзади', (msg) => msg.reply.text('скорее всего у вас изношена задняя ступица'));
bot.on('/центральный_замок', (msg) => msg.reply.text('www.drive2.ru/l/471715503279178766/'));
bot.on('/вентилятор_печки', (msg) => msg.reply.text('www.drive2.ru/l/8387454/'));
bot.on('/Растет_температура_ОЖ', (msg) => msg.reply.text('www.drive2.ru/l/486646871184375880/'));
bot.on('/aux', (msg) => msg.reply.text('www.drive2.ru/l/7504469/'));
bot.on('/запчасти_от_rx8', (msg) => msg.reply.text('www.drive2.ru/l/8434727/'));
bot.on('/открыть_крышу_находу', (msg) => msg.reply.text('smart top: MODS4CARS \n'+
    'ROOFER www.drive2.ru/l/10572846/ www.drive2.ru/l/10426980/'));
bot.on('/отклик_на_газ', (msg) => msg.reply.text('www.drive2.ru/l/471730346686152983/'));
bot.on('/подвеска_KONI', (msg) => msg.reply.text('www.drive2.ru/l/472495606779085229/'));
bot.on('/подвеска_Bilstein', (msg) => msg.reply.text('www.drive2.ru/l/469473049314328709/'));
bot.on('/стабы_rx8', (msg) => msg.reply.text('www.drive2.ru/l/4539212/'));
bot.on('/главная_пара', (msg) => msg.reply.text('www.drive2.ru/l/288230376152728457/'));
bot.on('/тюнячка', (msg) => msg.reply.text('ilmotorsport.de/en/ \n'+
    'www.carbonmiata.com\n'+
    'www.good-win-racing.com'));
bot.on('/рулевая_тяга', (msg) => msg.reply.text('NE51-32-240'));
bot.on(['/тормоза','/колодки'], (msg) => msg.reply.text('Передние колодки NFY73328Z9C\n' +
    'Задние колодки NFY72648ZA\n' +
    'В городе TRW перед GDB 3401\n'+
    'В городе TRW зад GDB 3401\n'+
    'Колодки для трека (скрипят) HAWK HP+: перед HB522N.565 зад HB523N.539\n'+
    'Диск передний N12Y3325XB\n' +
    'Диск задний N12326251A\n'+
    'Ремкомплект переднего суппорта B2YD-33-26Z\n'+
    'Подробнее www.drive2.ru/l/486917351044809228/'));
bot.on(['/сцепление','/сцепа'], (msg) => msg.reply.text('Комплект 6ст. Exedy MZK1006\n' +
    'Корзина: ZC13T либо MZC649 (также c минимальными переделками MZC619)\n'+
    'Диск: ZD13H либо LF0416460B (также c минимальными переделками MDB001U)\n'+
    'Выжимной подшипник: BRG708\n'+
    'Подшипник вала: YF0911303\n'+
    'Комплект 5ст. Exedy MZK1005\n'+
    'где найти www.drive2.ru/l/498203837903930168/'));
bot.on(['/стойки','/втулки'], (msg) => msg.reply.text('Стойка стаба перед левая F189-34-170\n' +
    'Стойка стаба перед правая F189-34-150\n' +
    'Втулка стаба перед NG20-34-156\n' +
    'Стойка стаба зад F151-28-170\n' +
    'Втулка стаба зад NF53-28-156B\n'));
bot.on('/диски', (msg) => msg.reply.text('17\" 5x114.3 ширина 7 вылет 55 цо 67.1'));
bot.on('/стабы', (msg) => msg.reply.photo('./rollbars.jpg'));

const queries = bot.eventList.keys();
let allQueries = '';
for (let query of queries) {
    allQueries += '' + query + '\n';
}

bot.on('/faq', (msg) => msg.reply.text(allQueries));

bot.start();