import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data,
            seguindo: this.props.data.seguindo,
        }

        this.mostraLikes = this.mostraLikes.bind(this)
        this.like = this.like.bind(this)
        this.carregaIcone = this.carregaIcone.bind(this)
    }

    carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    } 

    like() {
        let feed = this.state.feed

        if (feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    mostraLikes(likers) {
        let feed = this.state.feed

        if (feed.likers <= 0) {
            return
        }

        return (
            <Text style={styles.likes} >
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        )
    }

    alternarSeguindo = () => {
        this.setState((prevState) => ({
            seguindo: !prevState.seguindo
        }));
    }

    render() {
        return (
            <View style={styles.areaFeed} >
                <View style={styles.viewPerfil} >
                    <Image
                        source={{ uri: this.state.feed.imgperfil }}
                        style={styles.fotoPerfil}
                    />

                    <Text style={styles.nomeUsuario}>
                        {this.state.feed.nome}
                    </Text>

                    <TouchableOpacity onPress={this.alternarSeguindo}>
                        <Text style={styles.seguindoButton}>
                            {this.state.seguindo ? "Seguindo" : "Seguir"}
                        </Text>
                    </TouchableOpacity>

                </View>

                <Image
                    resizeMode="cover"
                    style={styles.fotoPublicacao}
                    source={{ uri: this.state.feed.imgPublicacao }}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}
                        style={styles.iconeLike} >
                        <Image
                            style={styles.iconeLike}
                            source={this.carregaIcone(this.state.feed.likeada)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSend} >
                        <Image style={styles.iconeLike}
                            source={require('../img/send.png')}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape} >
                        {this.state.feed.nome}
                    </Text>

                    <Text style={styles.descRodape} >
                        {this.state.feed.descricao}
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    areaFeed: {
        flex: 1,
    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#111111'
    },
    seguindoButton: {
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 180,
        color: '#111111'
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 33,
        height: 33,
    },
    btnSend: {
        paddingLeft: 5,
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    descRodape: {
        padding: 5,
        fontSize: 15,
        color: '#111111'
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111111',
        paddingLeft: 5,
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 8,
    }
})