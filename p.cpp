#include<iostream>
using namespace std;
class node {
    public :
int data ;
node*next ;
node(int data){
    this->data = data;
    this->next = NULL;
}
};
node* reverse (node*&head){
    node * prev = NULL;
    node * curr = head;
    
while(curr!=NULL){
node *forward = curr->next;
curr->next = prev;

prev = curr ;
curr = forward;
}
return prev;
}
bool p (node*&head){
    node* slow = head;
    node* fast = head->next;
    while(fast->next !=NULL && fast->next->next !=NULL){
        fast=fast->next->next;
        slow=slow->next;
    }
     
    node*reversehead = reverse(slow->next);
    slow->next = reversehead;
    node * check1 = head;
    node * check2 = reversehead;
    
    while(check2!=NULL){
        
        if(check1->data != check2->data){
            return false;
        }
        else {
            check1=check1->next;
            check2=check2->next;
        }
    }
    return true;
}
int main(){
node * head = new node (12);
node * second = new node (1);
node * third = new node (1);
node * four = new node (12);
head->next = second;
second->next = third;
third->next = four;
four->next = NULL;
bool pal = p(head);
if(pal){
    cout<<"true";
}
else {
    cout<<"false";
}
}