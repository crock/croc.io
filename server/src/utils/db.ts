import { toInteger } from 'lodash';
import mysql from 'mysql2'
import config from './config';

export const connection = mysql.createConnection({
    host: config.DB_HOST,
    port: toInteger(config.DB_PORT),
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
});

export const getLastRecord = (name) => {
    return new Promise(function (resolve, reject) {

        var query_str =
            "SELECT name, " +
            "FROM records " +
            "WHERE (name = ?) " +
            "LIMIT 1 ";

        var query_var = [name];

        connection.query(query_str, query_var, function (err, rows, fields) {
            // Call reject on error states,
            // call resolve with results
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

export const getUser = (id) => {
    return new Promise(function (resolve, reject) {

        var query_str =
            "SELECT * FROM users " +
            "WHERE (id = ?) " +
            "LIMIT 1 ";

        var query_var = [id];

        connection.query(query_str, query_var, function (err, rows, fields) {
            // Call reject on error states,
            // call resolve with results
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

export const createNewUser = ({ email, password, firstName, lastName }) => {

    return new Promise(function (resolve, reject) {

        var query_str =
            "INSERT INTO users (email, password, firstName, lastName) " +
            "VALUES (?, ?, ?, ?) ";

        var query_var = [email, password, firstName, lastName];

        connection.query(query_str, query_var, function (err, results, fields) {
            // Call reject on error states,
            // call resolve with results
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });

}

export const loginUser = (email) => {

    return new Promise(function (resolve, reject) {

        var query_str = 'SELECT * FROM users WHERE email = ?'

        var query_var = [email];

        connection.query(query_str, query_var, function (err, results, fields) {
            // Call reject on error states,
            // call resolve with results
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const createNewDraft = ({ title, content, authorId }) => {

    return new Promise(function (resolve, reject) {
            
            var query_str =
                "INSERT INTO drafts (title, content, authorId) " +
                "VALUES (?, ?, ?) ";
    
            var query_var = [title, content, authorId];
    
            connection.query(query_str, query_var, function (err, results, fields) {
                // Call reject on error states,
                // call resolve with results
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
    });

}
