(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{373:function(a,t,s){"use strict";s.r(t);var e=s(43),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"database-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-access"}},[a._v("#")]),a._v(" Database Access")]),a._v(" "),s("p",[a._v("Alice comes with a built in SQLite database and offers a service provider for accessing the database.\nThere are methods for creating, modifying and deleting a table built right into the skill constructor\nand there are methods available for adding, removing, modifying and of course reading the content of the database.")]),a._v(" "),s("h2",{attrs:{id:"setting-up-the-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-database"}},[a._v("#")]),a._v(" Setting up the database")]),a._v(" "),s("p",[a._v("Define the DB in your program as a dictionary and prepare the name of the database as a variable as best practice:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("    _TABLENAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'MyReminders'")]),a._v("\n    _DATABASE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        _TABLENAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'message TEXT NOT NULL'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'timestamp INTEGER NOT NULL'")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Include the database definition into the constructor of your skill:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("__init__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("databaseSchema"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("_DATABASE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Now your databas will be set up with the first load of your skill.\nIf you later on decide to change the structure of your database, Alice will take care of that as well - just update the "),s("code",[a._v("self._DATABASE")]),a._v(" variable and Alice will add or remove the correct fields on reload of the skill.")]),a._v(" "),s("h2",{attrs:{id:"writing-to-your-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-to-your-database"}},[a._v("#")]),a._v(" Writing to your database")]),a._v(" "),s("p",[a._v("Adding an entry to your database is as easy as defining the new entry as dictonary and calling the DatabaseManager:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("databaseInsert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("tableName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("_TABLENAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" values"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yourMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'timestamp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yourTimestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"reading-from-your-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-from-your-database"}},[a._v("#")]),a._v(" Reading from your database")]),a._v(" "),s("p",[a._v("If you want to read entries, you have to know a bit SQL for the selection criteria.\nWith "),s("code",[a._v("myMessage")]),a._v(" as a local python variable you can make the following call, to read a database entry with the message stored in "),s("code",[a._v("myMessage")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("databaseFetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n            tableName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("_TABLENAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            query"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'SELECT * FROM :__table__ WHERE message = :tmpMessage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            values"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'tmpMessage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" myMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            method"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'all'")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"delete-from-your-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-from-your-database"}},[a._v("#")]),a._v(" Delete from your database")]),a._v(" "),s("p",[a._v("Again some SQL Syntax has to be known.\nIn this example we delete all entries that are already in the past by comparing them to the python variable "),s("code",[a._v("myTimestamp")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DatabaseManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n                tableName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'MyReminders'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                query"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'DELETE FROM :__table__ WHERE timestamp < :tmpTimestamp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                values"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'tmpTimestamp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" myTimestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                callerName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n         ```\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);