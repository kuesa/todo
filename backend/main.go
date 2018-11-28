package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// Structs

// User stores the ID and tasks associated with each user
type User struct {
	ID    string `json:"id,omitempty"`
	Tasks *Tasks `json:"tasks,omitempty"`
}

// Tasks contains all of the tasks assigned to the user
type Tasks struct {
	Singlestep string `json:"singlestep,omitempty"`
	Multistep  string `json:"multistep,omitempty"`
}

var users []User

/*
	API Responses:
	/users (GET) -> the whole DB
	/users/{id} (GET) -> a single user
	/users/{id} (POST) -> create new user
	/users/{id} (DELETE) -> remove user

*/

// main
func main() {

	// Test users
	users = append(users, User{ID: "1", Tasks: &Tasks{Singlestep: "13", Multistep: "242"}})
	users = append(users, User{ID: "2", Tasks: &Tasks{Singlestep: "3", Multistep: "2"}})
	users = append(users, User{ID: "3", Tasks: &Tasks{Singlestep: "420", Multistep: "1337"}})

	router := mux.NewRouter()

	// handles and methods
	router.HandleFunc("/users", GetUsers).Methods("GET")
	router.HandleFunc("/users/{id}", GetUser).Methods("GET")
	router.HandleFunc("/users/{id}", CreateUser).Methods("POST")
	router.HandleFunc("/users/{id}", DeleteUser).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8080", router))
}

// GetUsers retrives JSON for all users
func GetUsers(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(users)
}

// GetUser retrieves JSON for one user
func GetUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for _, item := range users {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&User{})
}

// CreateUser adds one user to users
func CreateUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var user User
	_ = json.NewDecoder(r.Body).Decode(&user)
	user.ID = params["id"]
	users = append(users, user)
	json.NewEncoder(w).Encode(users)
}

// DeleteUser removes one user from users
func DeleteUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for index, item := range users {
		if item.ID == params["id"] {
			users = append(users[:index], users[index+1:]...)
			break
		}
		json.NewEncoder(w).Encode(users)
	}
}
