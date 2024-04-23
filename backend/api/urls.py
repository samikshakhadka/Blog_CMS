from django.urls import path
from . import views
from .views import  BlogEdit
urlpatterns = [
    path("blogs/", views.BlogListCreate.as_view(), name="blog-list"),
    path("blogs/delete/<int:pk>/", views.BlogDelete.as_view(), name="delete-blog"),
    path('blogs/edit/<int:pk>/', BlogEdit.as_view(), name='blog-edit'),
]
