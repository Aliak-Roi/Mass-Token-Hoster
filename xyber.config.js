require('dotenv').config('.env'); // .env Support

exports.BOT_TOKEN = process.env.BOT_TOKEN ||
/*  BOT TOKEN  */   '';        
                                /*
                                    Discord Bot Token
                                    -----------------
                                    Not Selfbot Token
                                */

exports.BOT_STATUS_TEXT = [
 'discord.gg/xyber',
 'On your Phone'
];
exports.BOT_STATUS_ACTIVITY = [ 
 'STREAMING',
 `PLAYING`
];
exports.TOKEN_EMAIL = process.env.TOKEN_EMAIL ||
/* TOKEN EMAIL */  'gmail.com'; 
                                /*
                                        Examples
                                    ---------------
                                    gmail.com
                                    hotmail.com
                                    outlook.com
                                    ---------------
                                    Token Formatter
                                */


// Made by Aliak Roi | discord.gg/xyber
