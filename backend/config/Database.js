import {Sequelize} from "sequelize";

const db = new Sequelize("uploader_toplearn", "root", "", {
     host: "localhost",
     dialect: "mysql",
});


export default db;
