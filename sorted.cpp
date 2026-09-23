#include<iostream>
using namespace std;
class node {
int data ;
node * next ;
node(int data){
    this->data = data;
    this->next = NULL;
}
};
node * dummyzero = new node (-1);
node * tailzero = dummyzero;
node * dummyone = new node (-1);
node * tailone = dummyone;
node * dummytwo = new node (-1);
 node * tailtwo = dummytwo;
 node * curr = head;
 while(curr!=NULL){
    if(curr->data==0){
node * temp = curr;
curr = curr->next;
temp->next = NULL;
 tailzero->next = temp;
 tailzero = temp;
    }
    else if (curr->data==1){
node * temp = curr ;
curr = curr->next;
temp->next = NULL;
tailone->next = temp;
tailone = temp;
    }
    else {
node * temp = curr ;
curr = curr->next;
temp->next = NULL;
tailtwo->next = temp;
tailtwo = temp;
    }
temp = dummyone;
dummyone = dummyone->next;
temp = temp->next;
delete temp;
temp = dummytwo;
dummytwo = dummytwo->next;
temp = temp->next;
delete temp;

 }
int main(){
node * head = new node (1);
node * second = new node (2);
node *  third = new node (0);
node *  four = new node (2);
node *  fifth = new node (0);
head->next = second;
second->next = third;
third -> next = four;
four -> next =  fifth;
}